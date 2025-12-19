import { NextRequest, NextResponse } from 'next/server';
import { GameService } from '@/lib/blackjack/GameService';
import { createErrorResponse } from '@/lib/api-helpers';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const sessionId = searchParams.get('sessionId') || undefined;

    const game = GameService.getCurrentGame(sessionId);
    
    return NextResponse.json({
      success: true,
      game: game.toJSON(),
    });
  } catch (error: any) {
    return createErrorResponse(error.message || 'Failed to get game state', 400);
  }
}

