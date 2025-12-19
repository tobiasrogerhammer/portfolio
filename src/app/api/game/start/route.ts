import { NextRequest, NextResponse } from 'next/server';
import { GameService } from '@/lib/blackjack/GameService';
import { parseRequestBody, createErrorResponse } from '@/lib/api-helpers';

export async function POST(request: NextRequest) {
  try {
    const body = await parseRequestBody(request);
    const initialMoney = body.initialMoney || 100;
    const sessionId = body.sessionId;

    const game = GameService.startNewGame(initialMoney, sessionId);
    
    return NextResponse.json({
      success: true,
      game: game.toJSON(),
      message: 'New game started!',
    });
  } catch (error: any) {
    return createErrorResponse(error.message || 'Failed to start game', 400);
  }
}

