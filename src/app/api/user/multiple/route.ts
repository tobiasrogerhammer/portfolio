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

    // Process each user
    for (let i = 0; i < body.users.length; i++) {
      const userData = body.users[i];
      
      try {
        // Validate input
        const usernameValidation = validateUsername(userData.username);
        if (!usernameValidation.valid) {
          errors.push({
            index: i,
            username: userData.username,
            error: usernameValidation.error,
          });
          continue;
        }

        const emailValidation = validateEmail(userData.mailadress);
        if (!emailValidation.valid) {
          errors.push({
            index: i,
            username: userData.username,
            error: emailValidation.error,
          });
          continue;
        }

        const passwordValidation = validatePassword(userData.password);
        if (!passwordValidation.valid) {
          errors.push({
            index: i,
            username: userData.username,
            error: passwordValidation.error,
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
        
        if (err && typeof err === 'object' && 'code' in err && err.code === 11000 && 'keyPattern' in err) {
          const mongoError = err as { keyPattern: Record<string, unknown> };
          const field = Object.keys(mongoError.keyPattern)[0];
          errors.push({
            index: i,
            username: userData.username,
            error: `${field === 'username' ? 'Username' : 'Email'} already exists`,
          });
        } else {
          const errorMessage = err && typeof err === 'object' && 'message' in err && typeof err.message === 'string'
            ? err.message
            : 'Failed to create user';
          errors.push({
            index: i,
            username: userData.username,
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

