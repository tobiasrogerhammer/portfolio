import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';
import { createErrorResponse, handleApiError } from '@/lib/api-helpers';

export async function PUT(
  request: NextRequest,
  { params }: { params: { userId: string } }
) {
  try {
    await connectDB();

    const id = params.userId;
    const user = await User.findById(id);

    if (!user) {
      return createErrorResponse('User not found', 404);
    }

    user.isAdmin = !user.isAdmin;
    const updatedUser = await user.save();

    return NextResponse.json(updatedUser);
  } catch (error: any) {
    return handleApiError(error);
  }
}

