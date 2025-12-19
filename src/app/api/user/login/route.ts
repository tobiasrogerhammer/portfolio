import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';
import { parseRequestBody, createErrorResponse, handleApiError } from '@/lib/api-helpers';
import bcrypt from 'bcryptjs';

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const body = await parseRequestBody(request);

    // Validate input
    if (!body.username || !body.password) {
      return createErrorResponse('Username and password are required', 400);
    }

    const user = await User.findOne({ username: body.username.trim() });
    if (!user) {
      return createErrorResponse('Invalid credentials', 401);
    }

    const isMatch = await bcrypt.compare(body.password, user.password);
    if (!isMatch) {
      return createErrorResponse('Invalid credentials', 401);
    }

    return NextResponse.json({
      message: 'Login successful',
      isAdmin: user.isAdmin || false,
    });
  } catch (err: unknown) {
    return handleApiError(err);
  }
}

