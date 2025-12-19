import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Record from '@/models/Record';
import { handleApiError } from '@/lib/api-helpers';

export async function GET() {
  try {
    await connectDB();

    const records = await Record.find().sort({ date: -1 });
    return NextResponse.json(records);
  } catch (err: unknown) {
    return handleApiError(err);
  }
}

