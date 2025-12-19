import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';
import { validateEmail, validatePassword, validateUsername } from '@/lib/validators';
import { parseRequestBody, handleApiError, createErrorResponse } from '@/lib/api-helpers';
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

    const results: any[] = [];
    const errors: any[] = [];

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
      } catch (err: any) {
        console.error(`Error creating user ${i}:`, err);
        
        if (err.code === 11000) {
          const field = Object.keys(err.keyPattern)[0];
          errors.push({
            index: i,
            username: userData.username,
            error: `${field === 'username' ? 'Username' : 'Email'} already exists`,
          });
        } else {
          errors.push({
            index: i,
            username: userData.username,
            error: err.message || 'Failed to create user',
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
  } catch (err: any) {
    return handleApiError(err);
  }
}

