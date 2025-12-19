import { NextRequest, NextResponse } from 'next/server';
import { GameService } from '@/lib/blackjack/GameService';
import { parseRequestBody, createErrorResponse } from '@/lib/api-helpers';

export async function POST(request: NextRequest) {
  try {
    const body = await parseRequestBody(request);
    const amount = typeof body.amount === 'number' ? body.amount : parseInt(body.amount);
    const sessionId = body.sessionId;

    if (!amount || amount <= 0) {
      return createErrorResponse('Invalid bet amount', 400);
    }

    const game = GameService.placeBet(amount, sessionId);
    
    return NextResponse.json({
      success: true,
      game: game.toJSON(),
    });
  } catch (error: unknown) {
    const errorMessage = error && typeof error === 'object' && 'message' in error && typeof error.message === 'string'
      ? error.message
      : 'Failed to place bet';
    return createErrorResponse(errorMessage, 400);
  }
}

