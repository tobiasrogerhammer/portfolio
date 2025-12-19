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

    // Validate input
    const usernameValidation = validateUsername(body.username);
    if (!usernameValidation.valid) {
      return createErrorResponse(usernameValidation.error, 400);
    }

    const emailValidation = validateEmail(body.mailadress);
    if (!emailValidation.valid) {
      return createErrorResponse(emailValidation.error, 400);
    }

    const passwordValidation = validatePassword(body.password);
    if (!passwordValidation.valid) {
      return createErrorResponse(passwordValidation.error, 400);
    }

    if (typeof body.password !== 'string') {
      return createErrorResponse('Password must be a string', 400);
    }
    if (typeof body.username !== 'string') {
      return createErrorResponse('Username must be a string', 400);
    }
    if (typeof body.mailadress !== 'string') {
      return createErrorResponse('Email must be a string', 400);
    }

    const hashedPassword = await bcrypt.hash(body.password, 12);
    const newUser = new User({
      username: body.username.trim(),
      mailadress: body.mailadress.trim().toLowerCase(),
      password: hashedPassword,
    });

    const user = await newUser.save();
    return NextResponse.json(
      {
        message: 'User created successfully',
        username: user.username,
        exists: false,
      },
      { status: 201 }
    );
  } catch (err: unknown) {
    // Handle duplicate key error with exists flag
    if (err && typeof err === 'object' && 'code' in err && err.code === 11000 && 'keyPattern' in err) {
      const mongoError = err as { keyPattern: Record<string, unknown> };
      const field = Object.keys(mongoError.keyPattern)[0];
      return NextResponse.json(
        {
          error: `${field === 'username' ? 'Username' : 'Email'} already exists`,
          exists: true,
        },
        { status: 409 }
      );
    }
    return handleApiError(err);
  }
}

