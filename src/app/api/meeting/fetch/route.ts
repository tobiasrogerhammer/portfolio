import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Meeting from '@/models/Meeting';
import { handleApiError } from '@/lib/api-helpers';

export async function GET() {
  try {
    await connectDB();

    const meetings = await Meeting.find().sort({ startTime: 1 });
    return NextResponse.json(meetings);
  } catch (err: any) {
    return handleApiError(err);
  }
}

