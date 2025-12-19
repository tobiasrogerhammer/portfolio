import { Game } from './Game';
import { Player } from './Player';

// Store games in memory (in production, you might want to use a database or Redis)
const games = new Map<string, Game>();

export class GameService {
  private static getGameId(sessionId?: string): string {
    // In a real app, you'd use a proper session ID
    // For now, we'll use a default session or generate one
    return sessionId || 'default';
  }

  static startNewGame(initialMoney: number = 100, sessionId?: string): Game {
    const player = new Player(initialMoney);
    const game = new Game(player);
    const gameId = this.getGameId(sessionId);
    games.set(gameId, game);
    return game;
  }

  static getCurrentGame(sessionId?: string): Game {
    const gameId = this.getGameId(sessionId);
    const game = games.get(gameId);
    if (!game) {
      throw new Error('No active game. Please start a new game first.');
    }
    return game;
  }

  static hit(sessionId?: string): Game {
    const game = this.getCurrentGame(sessionId);
    
    if (!game.isPlayerTurn) {
      throw new Error("It's not your turn to hit.");
    }
    
    game.playerHit();
    return game;
  }

  static stand(sessionId?: string): Game {
    const game = this.getCurrentGame(sessionId);
    
    if (!game.isPlayerTurn) {
      throw new Error("It's not your turn to stand.");
    }
    
    game.playerStand();
    return game;
  }

  static placeBet(amount: number, sessionId?: string): Game {
    const game = this.getCurrentGame(sessionId);
    
    // Check if we can place a bet
    const status = game.gameStatus;
    if (status !== 'NEW_GAME' && 
        status !== 'PLAYER_WINS' && 
        status !== 'DEALER_WINS' && 
        status !== 'PLAYER_BUSTED' && 
        status !== 'DEALER_BUSTED' && 
        status !== 'PUSH' &&
        status !== 'CARDS_DEALT') {
      throw new Error('Cannot place bet while game is in progress.');
    }
    
    game.placeBet(amount);
    // Only deal new cards if status is not CARDS_DEALT
    if (status !== 'CARDS_DEALT') {
      game.dealInitialCards();
    }
    return game;
  }

  static dealCards(sessionId?: string): Game {
    const game = this.getCurrentGame(sessionId);
    
    // Check if we can deal cards
    const status = game.gameStatus;
    if (status !== 'NEW_GAME' && 
        status !== 'PLAYER_WINS' && 
        status !== 'DEALER_WINS' && 
        status !== 'PLAYER_BUSTED' && 
        status !== 'DEALER_BUSTED' && 
        status !== 'PUSH' &&
        status !== 'CARDS_DEALT') {
      throw new Error('Cannot deal cards while game is in progress.');
    }
    
    game.dealCardsHidden();
    return game;
  }

  static startGame(sessionId?: string): Game {
    const game = this.getCurrentGame(sessionId);
    
    // Only start if cards are already dealt
    if (game.gameStatus !== 'CARDS_DEALT') {
      throw new Error('Cards must be dealt first before starting the game.');
    }
    
    // Check if bet is placed
    if (game.player.currentBet <= 0) {
      throw new Error('You must place a bet before starting the game.');
    }
    
    game.startGame();
    return game;
  }

  static hasActiveGame(sessionId?: string): boolean {
    const gameId = this.getGameId(sessionId);
    return games.has(gameId);
  }
}

