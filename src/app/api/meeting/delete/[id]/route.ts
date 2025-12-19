import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Meeting from '@/models/Meeting';
import { createErrorResponse, handleApiError } from '@/lib/api-helpers';

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();

    const { id } = params;

    if (!id) {
      return createErrorResponse('Meeting ID is required', 400);
    }

    const result = await Meeting.deleteOne({ _id: id });

    if (result.deletedCount === 0) {
      return createErrorResponse('Meeting not found', 404);
    }

    return NextResponse.json({
      message: 'Meeting deleted successfully',
      id: id,
    });
  } catch (err: any) {
    // Handle invalid ObjectId
    if (err.name === 'CastError') {
      return createErrorResponse('Invalid meeting ID format', 400);
    }
    return handleApiError(err);
  }
}

