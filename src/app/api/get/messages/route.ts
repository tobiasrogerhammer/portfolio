import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Message from '@/models/Message';
import { handleApiError } from '@/lib/api-helpers';

export async function GET() {
  try {
    await connectDB();

    const messages = await Message.find().sort({ time: 1 });
    return NextResponse.json(messages);
  } catch (err: any) {
    return handleApiError(err);
  }
}

