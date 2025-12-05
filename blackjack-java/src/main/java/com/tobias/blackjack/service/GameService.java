package com.tobias.blackjack.service;

import com.tobias.blackjack.model.Game;
import com.tobias.blackjack.model.Player;
import org.springframework.stereotype.Service;

/**
 * Service class for managing the Blackjack game logic
 * 
 * This service handles the core game functionality and maintains
 * the current game state for web requests.
 */
@Service
public class GameService {

    private Game currentGame;

    /**
     * Start a new game with initial money
     */
    public Game startNewGame(int initialMoney) {
        Player player = new Player(initialMoney);
        currentGame = new Game(player);
        return currentGame;
    }

    /**
     * Player hits (takes another card)
     */
    public Game hit() {
        if (currentGame == null) {
            throw new IllegalStateException("No active game. Please start a new game first.");
        }
        
        if (!currentGame.isPlayerTurn()) {
            throw new IllegalStateException("It's not your turn to hit.");
        }
        
        currentGame.playerHit();
        return currentGame;
    }

    /**
     * Player stands (stops taking cards)
     */
    public Game stand() {
        if (currentGame == null) {
            throw new IllegalStateException("No active game. Please start a new game first.");
        }
        
        if (!currentGame.isPlayerTurn()) {
            throw new IllegalStateException("It's not your turn to stand.");
        }
        
        currentGame.playerStand();
        return currentGame;
    }

    /**
     * Place a bet and deal initial cards
     */
    public Game placeBet(int amount) {
        if (currentGame == null) {
            throw new IllegalStateException("No active game. Please start a new game first.");
        }
        
        // Check if we can place a bet (game must be finished, new, or cards already dealt)
        String status = currentGame.getGameStatus();
        if (!status.equals("NEW_GAME") && 
            !status.equals("PLAYER_WINS") && 
            !status.equals("DEALER_WINS") && 
            !status.equals("PLAYER_BUSTED") && 
            !status.equals("DEALER_BUSTED") && 
            !status.equals("PUSH") &&
            !status.equals("CARDS_DEALT")) {
            throw new IllegalStateException("Cannot place bet while game is in progress.");
        }
        
        currentGame.placeBet(amount);
        // Only deal new cards if status is not CARDS_DEALT (cards already dealt)
        if (!status.equals("CARDS_DEALT")) {
            currentGame.dealInitialCards();
        }
        return currentGame;
    }

    /**
     * Get the current game state
     */
    public Game getCurrentGame() {
        if (currentGame == null) {
            throw new IllegalStateException("No active game. Please start a new game first.");
        }
        return currentGame;
    }

    /**
     * Check if there's an active game
     */
    public boolean hasActiveGame() {
        return currentGame != null;
    }

    /**
     * Deal cards without starting the game (for "Play Again" functionality)
     */
    public Game dealCards() {
        if (currentGame == null) {
            throw new IllegalStateException("No active game. Please start a new game first.");
        }
        
        // Check if we can deal cards (game must be finished or new)
        String status = currentGame.getGameStatus();
        if (!status.equals("NEW_GAME") && 
            !status.equals("PLAYER_WINS") && 
            !status.equals("DEALER_WINS") && 
            !status.equals("PLAYER_BUSTED") && 
            !status.equals("DEALER_BUSTED") && 
            !status.equals("PUSH") &&
            !status.equals("CARDS_DEALT")) {
            throw new IllegalStateException("Cannot deal cards while game is in progress.");
        }
        
        currentGame.dealCardsHidden();
        return currentGame;
    }

    /**
     * Start the game by revealing cards and checking for blackjack
     */
    public Game startGame() {
        if (currentGame == null) {
            throw new IllegalStateException("No active game. Please start a new game first.");
        }
        
        // Only start if cards are already dealt
        if (!currentGame.getGameStatus().equals("CARDS_DEALT")) {
            throw new IllegalStateException("Cards must be dealt first before starting the game.");
        }
        
        // Check if bet is placed
        if (currentGame.getPlayer().getCurrentBet() <= 0) {
            throw new IllegalStateException("You must place a bet before starting the game.");
        }
        
        // Change status to PLAYING and check for blackjack
        currentGame.setGameStatus("PLAYING");
        
        // Check for blackjack
        if (currentGame.getPlayer().hasBlackjack() && currentGame.getDealerValue() == 21) {
            // Both have blackjack - push
            currentGame.setPlayerTurn(false);
            currentGame.setGameStatus("PUSH");
            // Return bet
            int currentBet = currentGame.getPlayer().getCurrentBet();
            currentGame.getPlayer().setMoney(currentGame.getPlayer().getMoney() + currentBet);
            currentGame.getPlayer().setCurrentBet(0);
        } else if (currentGame.getPlayer().hasBlackjack()) {
            // Player has blackjack - instant win (pays 3:2)
            currentGame.setPlayerTurn(false);
            currentGame.setGameStatus("PLAYER_WINS");
            int bet = currentGame.getPlayer().getCurrentBet();
            // Blackjack pays 3:2, so winnings = bet * 1.5
            int winnings = (bet * 3) / 2; // 3:2 odds
            currentGame.getPlayer().setMoney(currentGame.getPlayer().getMoney() + bet + winnings);
            currentGame.getPlayer().setCurrentBet(0);
        } else if (currentGame.getDealerValue() == 21) {
            // Dealer has blackjack - instant loss
            currentGame.setPlayerTurn(false);
            currentGame.setGameStatus("DEALER_WINS");
            // Bet already deducted, just clear it
            currentGame.getPlayer().setCurrentBet(0);
        }
        
        return currentGame;
    }
}

