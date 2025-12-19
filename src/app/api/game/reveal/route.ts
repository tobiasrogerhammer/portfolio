import { NextRequest, NextResponse } from 'next/server';
import { GameService } from '@/lib/blackjack/GameService';
import { parseRequestBody, createErrorResponse } from '@/lib/api-helpers';

export async function POST(request: NextRequest) {
  try {
    const body = await parseRequestBody(request);
    const sessionId = body.sessionId;

    const game = GameService.startGame(sessionId);
    
    return NextResponse.json({
      success: true,
      game: game.toJSON(),
    });
  } catch (error: any) {
    return createErrorResponse(error.message || 'Failed to reveal', 400);
  }
}

