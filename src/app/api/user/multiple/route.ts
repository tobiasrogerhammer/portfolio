import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';
import { validateEmail, validatePassword, validateUsername } from '@/lib/validators';
import { parseRequestBody, handleApiError } from '@/lib/api-helpers';
import bcrypt from 'bcryptjs';

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const body = await parseRequestBody(request);

    if (!body.users || !Array.isArray(body.users)) {
      return NextResponse.json(
        { error: 'Users array is required' },
        { status: 400 }
      );
    }

    interface UserResult {
      index: number;
      username: string;
      mailadress: string;
      success: boolean;
    }
    
    interface UserError {
      index: number;
      username: string;
      error: string;
    }
    
    const results: UserResult[] = [];
    const errors: UserError[] = [];

    // Type guard: ensure body.users is an array
    const usersArray = Array.isArray(body.users) ? body.users : [];

    // Process each user
    for (let i = 0; i < usersArray.length; i++) {
      const userData = usersArray[i] as Record<string, unknown>;
      
      try {
        // Validate input
        const usernameValidation = validateUsername(userData.username as string | undefined);
        if (!usernameValidation.valid) {
          errors.push({
            index: i,
            username: typeof userData.username === 'string' ? userData.username : String(userData.username || ''),
            error: usernameValidation.error || 'Invalid username',
          });
          continue;
        }

        const emailValidation = validateEmail(userData.mailadress as string | undefined);
        if (!emailValidation.valid) {
          errors.push({
            index: i,
            username: typeof userData.username === 'string' ? userData.username : String(userData.username || ''),
            error: emailValidation.error || 'Invalid email',
          });
          continue;
        }

        const passwordValidation = validatePassword(userData.password as string | undefined);
        if (!passwordValidation.valid) {
          errors.push({
            index: i,
            username: typeof userData.username === 'string' ? userData.username : String(userData.username || ''),
            error: passwordValidation.error || 'Invalid password',
          });
          continue;
        }

        // Type guard for userData properties
        if (typeof userData.username !== 'string' || typeof userData.mailadress !== 'string' || typeof userData.password !== 'string') {
          errors.push({
            index: i,
            username: typeof userData.username === 'string' ? userData.username : String(userData.username || ''),
            error: 'Invalid user data format',
          });
          continue;
        }

        // Check if user already exists
        const existingUser = await User.findOne({
          $or: [
            { username: userData.username.trim() },
            { mailadress: userData.mailadress.trim().toLowerCase() },
          ],
        });

        if (existingUser) {
          errors.push({
            index: i,
            username: userData.username,
            error: existingUser.username === userData.username.trim()
              ? 'Username already exists'
              : 'Email already exists',
          });
          continue;
        }

        // Create user
        const hashedPassword = await bcrypt.hash(userData.password, 12);
        const newUser = new User({
          username: userData.username.trim(),
          mailadress: userData.mailadress.trim().toLowerCase(),
          password: hashedPassword,
        });

        const savedUser = await newUser.save();
        results.push({
          index: i,
          username: savedUser.username,
          mailadress: savedUser.mailadress,
          success: true,
        });
      } catch (err: unknown) {
        console.error(`Error creating user ${i}:`, err);
        
        const usernameForError = typeof userData.username === 'string' ? userData.username : String(userData.username || '');
        
        if (err && typeof err === 'object' && 'code' in err && err.code === 11000 && 'keyPattern' in err) {
          const mongoError = err as { keyPattern: Record<string, unknown> };
          const field = Object.keys(mongoError.keyPattern)[0];
          errors.push({
            index: i,
            username: usernameForError,
            error: `${field === 'username' ? 'Username' : 'Email'} already exists`,
          });
        } else {
          const errorMessage = err && typeof err === 'object' && 'message' in err && typeof err.message === 'string'
            ? err.message
            : 'Failed to create user';
          errors.push({
            index: i,
            username: usernameForError,
            error: errorMessage,
          });
        }
      }
    }

    return NextResponse.json({
      success: results.length,
      failed: errors.length,
      results: results,
      errors: errors,
    });
  } catch (err: unknown) {
    return handleApiError(err);
  }
}

