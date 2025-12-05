package com.tobias.blackjack.model;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * Represents the main game logic for Blackjack
 * 
 * This class should be replaced with your existing Game class
 * from your original Blackjack project.
 */
public class Game {
    private Player player;
    private List<Card> dealerHand;
    private List<Card> deck;
    private boolean isPlayerTurn;
    private String gameStatus;

    public Game(Player player) {
        this.player = player;
        this.dealerHand = new ArrayList<>();
        this.deck = createDeck();
        this.isPlayerTurn = true;
        this.gameStatus = "NEW_GAME";
    }

    private List<Card> createDeck() {
        List<Card> deck = new ArrayList<>();
        String[] suits = {"Hearts", "Diamonds", "Clubs", "Spades"};
        String[] ranks = {"Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"};
        int[] values = {11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10};

        for (String suit : suits) {
            for (int i = 0; i < ranks.length; i++) {
                deck.add(new Card(suit, ranks[i], values[i]));
            }
        }
        
        Collections.shuffle(deck);
        return deck;
    }

    public void dealInitialCards() {
        // Reset hands and game state for new round
        player.clearHand();
        dealerHand.clear();
        isPlayerTurn = true;
        gameStatus = "PLAYING";
        
        // Create new deck if needed
        if (deck.size() < 4) {
            deck = createDeck();
        }
        
        // Deal initial cards
        player.addCard(deck.remove(0));
        dealerHand.add(deck.remove(0));
        player.addCard(deck.remove(0));
        dealerHand.add(deck.remove(0));
        
        // Check for blackjack
        if (player.hasBlackjack() && getDealerValue() == 21) {
            // Both have blackjack - push
            isPlayerTurn = false;
            gameStatus = "PUSH";
            // Return bet
            player.setMoney(player.getMoney() + player.getCurrentBet());
            player.setCurrentBet(0);
        } else if (player.hasBlackjack()) {
            // Player has blackjack - instant win (pays 3:2)
            isPlayerTurn = false;
            gameStatus = "PLAYER_WINS";
            int bet = player.getCurrentBet();
            // Blackjack pays 3:2, so winnings = bet * 1.5
            // Since we use integers, we calculate: bet + (bet * 3 / 2)
            // This gives us: bet + 1.5*bet = 2.5*bet total
            int winnings = (bet * 3) / 2; // 3:2 odds
            player.setMoney(player.getMoney() + bet + winnings); // Return bet + winnings
            player.setCurrentBet(0);
        } else if (getDealerValue() == 21) {
            // Dealer has blackjack - instant loss
            isPlayerTurn = false;
            gameStatus = "DEALER_WINS";
            // Bet already deducted, just clear it
            player.setCurrentBet(0);
        }
    }

    /**
     * Deal cards without starting the game (cards will be hidden)
     */
    public void dealCardsHidden() {
        // Reset hands for new round
        player.clearHand();
        dealerHand.clear();
        isPlayerTurn = true;
        gameStatus = "CARDS_DEALT"; // New status for when cards are dealt but hidden
        
        // Create new deck if needed
        if (deck.size() < 4) {
            deck = createDeck();
        }
        
        // Deal initial cards (but keep them hidden)
        player.addCard(deck.remove(0));
        dealerHand.add(deck.remove(0));
        player.addCard(deck.remove(0));
        dealerHand.add(deck.remove(0));
    }

    public void playerHit() {
        if (isPlayerTurn && !player.isBusted()) {
            if (deck.isEmpty()) {
                deck = createDeck();
            }
            player.addCard(deck.remove(0));
            if (player.isBusted()) {
                isPlayerTurn = false;
                gameStatus = "PLAYER_BUSTED";
                // Player loses - bet already deducted
                player.setCurrentBet(0);
            }
        }
    }

    public void playerStand() {
        if (isPlayerTurn && !player.isBusted()) {
            isPlayerTurn = false;
            player.setHasStood(true);
            dealerPlay();
        }
    }

    private void dealerPlay() {
        // Don't play if player already busted
        if (player.isBusted()) {
            return;
        }
        
        // Dealer must hit until 17 or higher
        while (getDealerValue() < 17) {
            if (deck.isEmpty()) {
                deck = createDeck();
            }
            dealerHand.add(deck.remove(0));
        }
        
        // Determine winner and pay out
        int dealerValue = getDealerValue();
        int playerValue = player.getHandValue();
        
        if (dealerValue > 21) {
            gameStatus = "DEALER_BUSTED";
            // Player wins - return bet plus winnings (1:1 odds)
            // Bet was already deducted, so return bet + same amount as winnings
            int bet = player.getCurrentBet();
            player.setMoney(player.getMoney() + bet + bet); // Return bet + winnings (1:1)
            player.setCurrentBet(0);
        } else if (dealerValue > playerValue) {
            gameStatus = "DEALER_WINS";
            // Player loses - bet already deducted, just clear the bet
            player.setCurrentBet(0);
        } else if (playerValue > dealerValue) {
            gameStatus = "PLAYER_WINS";
            // Player wins - return bet plus winnings (1:1 odds)
            // Bet was already deducted, so return bet + same amount as winnings
            int bet = player.getCurrentBet();
            player.setMoney(player.getMoney() + bet + bet); // Return bet + winnings (1:1)
            player.setCurrentBet(0);
        } else {
            gameStatus = "PUSH";
            // Push - return bet only (no winnings, no loss)
            int bet = player.getCurrentBet();
            player.setMoney(player.getMoney() + bet);
            player.setCurrentBet(0);
        }
    }

    public int getDealerValue() {
        int value = 0;
        int aces = 0;
        
        for (Card card : dealerHand) {
            if (card.getRank().equals("Ace")) {
                aces++;
                value += 11;
            } else {
                value += card.getValue();
            }
        }
        
        while (value > 21 && aces > 0) {
            value -= 10;
            aces--;
        }
        
        return value;
    }

    public void placeBet(int amount) {
        // Can only place bet if game is in NEW_GAME, CARDS_DEALT, or previous round is finished
        // Also check that player has enough money
        if (amount > 0 && 
            amount <= player.getMoney() &&
            player.getMoney() > 0 &&
            (gameStatus.equals("NEW_GAME") || 
             gameStatus.equals("CARDS_DEALT") ||
             gameStatus.equals("PLAYER_WINS") || 
             gameStatus.equals("DEALER_WINS") || 
             gameStatus.equals("PLAYER_BUSTED") || 
             gameStatus.equals("DEALER_BUSTED") || 
             gameStatus.equals("PUSH"))) {
            player.setCurrentBet(amount);
            player.setMoney(player.getMoney() - amount);
        } else if (player.getMoney() <= 0) {
            throw new IllegalStateException("You're out of money! Cannot place a bet.");
        } else if (amount > player.getMoney()) {
            throw new IllegalStateException("You don't have enough money! You have $" + player.getMoney() + ".");
        }
    }

    // Getters and setters
    public Player getPlayer() {
        return player;
    }

    public void setPlayer(Player player) {
        this.player = player;
    }

    public List<Card> getDealerHand() {
        return dealerHand;
    }

    public void setDealerHand(List<Card> dealerHand) {
        this.dealerHand = dealerHand;
    }

    public boolean isPlayerTurn() {
        return isPlayerTurn;
    }

    public void setPlayerTurn(boolean playerTurn) {
        isPlayerTurn = playerTurn;
    }

    public String getGameStatus() {
        return gameStatus;
    }

    public void setGameStatus(String gameStatus) {
        this.gameStatus = gameStatus;
    }
}

