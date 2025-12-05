package com.tobias.blackjack.model;

import java.util.ArrayList;
import java.util.List;

/**
 * Represents a player in the Blackjack game
 * 
 * This class should be replaced with your existing Player class
 * from your original Blackjack project.
 */
public class Player {
    private int money;
    private List<Card> hand;
    private int currentBet;
    private boolean hasStood;

    public Player(int initialMoney) {
        this.money = initialMoney;
        this.hand = new ArrayList<>();
        this.currentBet = 0;
        this.hasStood = false;
    }

    public void addCard(Card card) {
        hand.add(card);
    }

    public int getHandValue() {
        int value = 0;
        int aces = 0;
        
        for (Card card : hand) {
            if (card.getRank().equals("Ace")) {
                aces++;
                value += 11;
            } else {
                value += card.getValue();
            }
        }
        
        // Adjust for aces
        while (value > 21 && aces > 0) {
            value -= 10;
            aces--;
        }
        
        return value;
    }

    public boolean isBusted() {
        return getHandValue() > 21;
    }

    public boolean hasBlackjack() {
        return hand.size() == 2 && getHandValue() == 21;
    }

    public void clearHand() {
        hand.clear();
        currentBet = 0;
        hasStood = false;
    }

    // Getters and setters
    public int getMoney() {
        return money;
    }

    public void setMoney(int money) {
        this.money = money;
    }

    public List<Card> getHand() {
        return hand;
    }

    public void setHand(List<Card> hand) {
        this.hand = hand;
    }

    public int getCurrentBet() {
        return currentBet;
    }

    public void setCurrentBet(int currentBet) {
        this.currentBet = currentBet;
    }

    public boolean hasStood() {
        return hasStood;
    }

    public void setHasStood(boolean hasStood) {
        this.hasStood = hasStood;
    }
}

