import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Boat from '@/models/Boat';
import { validateEmail, validateDateRange, validatePostnummer } from '@/lib/validators';
import { parseRequestBody, createErrorResponse, handleApiError } from '@/lib/api-helpers';

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const body = await parseRequestBody(request);

    // Validate input with type guards
    if (!body.Adresse || typeof body.Adresse !== 'string' || body.Adresse.trim().length === 0) {
      return createErrorResponse('Address is required', 400);
    }

    const postnummerValidation = validatePostnummer(body.Postnummer as number | string | undefined | null);
    if (!postnummerValidation.valid) {
      return createErrorResponse(postnummerValidation.error, 400);
    }

    if (!body.Poststed || typeof body.Poststed !== 'string' || body.Poststed.trim().length === 0) {
      return createErrorResponse('Poststed is required', 400);
    }

    if (body.Båtplass === undefined || body.Båtplass === null) {
      return createErrorResponse('Båtplass is required', 400);
    }

    const båtplassValue = typeof body.Båtplass === 'string' ? parseInt(body.Båtplass) : typeof body.Båtplass === 'number' ? body.Båtplass : NaN;
    if (isNaN(båtplassValue) || båtplassValue < 1) {
      return createErrorResponse('Båtplass must be a positive number', 400);
    }

    if (!body.startUse || !body.endUse) {
      return createErrorResponse('Start date and end date are required', 400);
    }

    const dateValidation = validateDateRange(body.startUse as string | undefined, body.endUse as string | undefined);
    if (!dateValidation.valid) {
      return createErrorResponse(dateValidation.error, 400);
    }

    if (!body.mailadress || typeof body.mailadress !== 'string') {
      return createErrorResponse('Email is required', 400);
    }

    const emailValidation = validateEmail(body.mailadress as string | undefined);
    if (!emailValidation.valid) {
      return createErrorResponse(emailValidation.error, 400);
    }

    // Check for overlapping reservations
    const startDate = new Date(body.startUse);
    const endDate = new Date(body.endUse);

    const existingBoat = await Boat.findOne({
      Båtplass: båtplassValue,
      $or: [
        {
          startUse: { $lte: endDate },
          endUse: { $gte: startDate },
        },
      ],
    });

    if (existingBoat) {
      return createErrorResponse(
        `Boat spot ${båtplassValue} is already reserved for this period`,
        409
      );
    }

    const boat = new Boat({
      Adresse: typeof body.Adresse === 'string' ? body.Adresse.trim() : String(body.Adresse),
      Postnummer: typeof body.Postnummer === 'number' ? body.Postnummer : parseInt(String(body.Postnummer)),
      Poststed: typeof body.Poststed === 'string' ? body.Poststed.trim() : String(body.Poststed),
      Båtplass: båtplassValue,
      startUse: startDate,
      endUse: endDate,
      mailadress: body.mailadress.trim().toLowerCase(),
    });

    await boat.save();
    return NextResponse.json(
      {
        message: 'Boat registered successfully',
        boat: boat,
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    return handleApiError(error);
  }
}

