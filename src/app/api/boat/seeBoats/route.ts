import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Boat from '@/models/Boat';
import { handleApiError } from '@/lib/api-helpers';

export async function GET() {
  try {
    await connectDB();

    const boatSpots = await Boat.find(
      {},
      {
        Båtplass: 1,
        _id: 1,
        startUse: 1,
        endUse: 1,
        mailadress: 1,
        Adresse: 1,
        Postnummer: 1,
        Poststed: 1,
      }
    ).sort({ Båtplass: 1 });

    return NextResponse.json(boatSpots);
  } catch (error: any) {
    return handleApiError(error);
  }
}

