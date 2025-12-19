import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';
import { handleApiError } from '@/lib/api-helpers';

export async function GET() {
  try {
    await connectDB();

    const users = await User.find({}, { username: 1, _id: 0 });
    return NextResponse.json(users);
  } catch (err: unknown) {
    return handleApiError(err);
  }
}

