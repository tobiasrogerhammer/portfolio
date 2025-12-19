import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Meeting from '@/models/Meeting';
import { validateDateRange } from '@/lib/validators';
import { parseRequestBody, createErrorResponse, handleApiError } from '@/lib/api-helpers';

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const body = await parseRequestBody(request);

    // Validate input
    if (!body.title || typeof body.title !== 'string' || body.title.trim().length === 0) {
      return createErrorResponse('Title is required', 400);
    }

    if (body.title.length > 200) {
      return createErrorResponse('Title is too long (max 200 characters)', 400);
    }

    if (!body.startTime || !body.endTime) {
      return createErrorResponse('Start time and end time are required', 400);
    }

    const dateValidation = validateDateRange(body.startTime as string | undefined, body.endTime as string | undefined);
    if (!dateValidation.valid) {
      return createErrorResponse(dateValidation.error || 'Invalid date range', 400);
    }

    if (!body.location || typeof body.location !== 'string' || body.location.trim().length === 0) {
      return createErrorResponse('Location is required', 400);
    }

    if (!body.agenda || typeof body.agenda !== 'string' || body.agenda.trim().length === 0) {
      return createErrorResponse('Agenda is required', 400);
    }

    const newMeeting = new Meeting({
      title: body.title.trim(),
      startTime: new Date(body.startTime as string | number | Date),
      endTime: new Date(body.endTime as string | number | Date),
      location: body.location.trim(),
      agenda: body.agenda.trim(),
      isCompleted: typeof body.isCompleted === 'boolean' ? body.isCompleted : false,
    });

    const meeting = await newMeeting.save();
    return NextResponse.json(
      {
        message: 'Meeting created successfully',
        meeting: meeting,
      },
      { status: 201 }
    );
  } catch (err: unknown) {
    return handleApiError(err);
  }
}

