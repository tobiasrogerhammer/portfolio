import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Message from '@/models/Message';
import { validateUsername } from '@/lib/validators';
import { parseRequestBody, createErrorResponse, handleApiError } from '@/lib/api-helpers';

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const body = await parseRequestBody(request);

    // Validate input
    const usernameValidation = validateUsername(body.username);
    if (!usernameValidation.valid) {
      return createErrorResponse(usernameValidation.error, 400);
    }

    if (!body.message || typeof body.message !== 'string' || body.message.trim().length === 0) {
      return createErrorResponse('Message cannot be empty', 400);
    }

    if (body.message.length > 1000) {
      return createErrorResponse('Message is too long (max 1000 characters)', 400);
    }

    if (!body.time) {
      return createErrorResponse('Time is required', 400);
    }

    if (typeof body.username !== 'string') {
      return createErrorResponse('Username must be a string', 400);
    }

    const newMessage = new Message({
      message: body.message.trim(),
      username: body.username.trim(),
      time: new Date(body.time),
    });

    const message = await newMessage.save();
    return NextResponse.json(
      {
        message: 'Message sent successfully',
        data: message,
      },
      { status: 201 }
    );
  } catch (err: unknown) {
    return handleApiError(err);
  }
}

