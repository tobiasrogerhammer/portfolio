import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Record from '@/models/Record';
import { validateEmail, validateUsername } from '@/lib/validators';
import { parseRequestBody, createErrorResponse, handleApiError } from '@/lib/api-helpers';

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const body = await parseRequestBody(request);

    // Validate input
    const usernameValidation = validateUsername(body.username as string | undefined);
    if (!usernameValidation.valid) {
      return createErrorResponse(usernameValidation.error || 'Invalid username', 400);
    }

    const emailValidation = validateEmail(body.mailadress as string | undefined);
    if (!emailValidation.valid) {
      return createErrorResponse(emailValidation.error || 'Invalid email', 400);
    }

    if (!body.date) {
      return createErrorResponse('Date is required', 400);
    }

    if (!body.reason || typeof body.reason !== 'string' || body.reason.trim().length === 0) {
      return createErrorResponse('Reason is required', 400);
    }

    // Validate date format
    const recordDate = new Date(body.date);
    if (isNaN(recordDate.getTime())) {
      return createErrorResponse('Invalid date format', 400);
    }

    if (typeof body.username !== 'string') {
      return createErrorResponse('Username must be a string', 400);
    }
    if (typeof body.mailadress !== 'string') {
      return createErrorResponse('Email must be a string', 400);
    }

    const newRecord = new Record({
      username: body.username.trim(),
      mailadress: body.mailadress.trim().toLowerCase(),
      date: recordDate,
      reason: body.reason.trim(),
    });

    const record = await newRecord.save();
    return NextResponse.json(
      {
        message: 'Record created successfully',
        record: record,
      },
      { status: 201 }
    );
  } catch (err: unknown) {
    // Handle duplicate key error
    if (err && typeof err === 'object' && 'code' in err && err.code === 11000 && 'keyPattern' in err) {
      const mongoError = err as { keyPattern: Record<string, unknown> };
      const field = Object.keys(mongoError.keyPattern)[0];
      return createErrorResponse(
        `${field === 'username' ? 'Username' : 'Email'} already has a record`,
        409
      );
    }
    return handleApiError(err);
  }
}

