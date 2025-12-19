import { NextRequest, NextResponse } from 'next/server';
import { GameService } from '@/lib/blackjack/GameService';
import { parseRequestBody, createErrorResponse } from '@/lib/api-helpers';

export async function POST(request: NextRequest) {
  try {
    const body = await parseRequestBody(request);
    const sessionId = body.sessionId;

    const game = GameService.hit(sessionId);
    
    return NextResponse.json({
      success: true,
      game: game.toJSON(),
    });
  } catch (error: unknown) {
    const errorMessage = error && typeof error === 'object' && 'message' in error && typeof error.message === 'string'
      ? error.message
      : 'Failed to hit';
    return createErrorResponse(errorMessage, 400);
  }
}

