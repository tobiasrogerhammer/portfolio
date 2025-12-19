import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Meeting from '@/models/Meeting';
import { parseRequestBody, createErrorResponse, handleApiError } from '@/lib/api-helpers';

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();

    const { id } = await params;

    if (!id) {
      return createErrorResponse('Meeting ID is required', 400);
    }

    const body = await parseRequestBody(request);
    const { isCompleted } = body;

    if (typeof isCompleted !== 'boolean') {
      return NextResponse.json(
        { error: 'isCompleted must be a boolean value' },
        { status: 400 }
      );
    }

    const meeting = await Meeting.findByIdAndUpdate(
      id,
      { isCompleted },
      { new: true, runValidators: true }
    );

    if (!meeting) {
      return NextResponse.json(
        { error: 'Meeting not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: 'Meeting updated successfully',
      meeting: meeting,
    });
  } catch (error: unknown) {
    // Handle invalid ObjectId
    if (error && typeof error === 'object' && 'name' in error && error.name === 'CastError') {
      return createErrorResponse('Invalid meeting ID format', 400);
    }
    return handleApiError(error);
  }
}

