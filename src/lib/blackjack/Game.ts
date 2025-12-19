import { Card } from './Card';
import { Player } from './Player';

export class Game {
  player: Player;
  dealerHand: Card[];
  deck: Card[];
  isPlayerTurn: boolean;
  gameStatus: string;

  constructor(player: Player) {
    this.player = player;
    this.dealerHand = [];
    this.deck = this.createDeck();
    this.isPlayerTurn = true;
    this.gameStatus = 'NEW_GAME';
  }

  private createDeck(): Card[] {
    const deck: Card[] = [];
    const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
    const ranks = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
    const values = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];

    for (const suit of suits) {
      for (let i = 0; i < ranks.length; i++) {
        deck.push(new Card(suit, ranks[i], values[i]));
      }
    }
    
    // Shuffle deck
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    
    return deck;
  }

  dealInitialCards(): void {
    // Reset hands and game state for new round
    this.player.clearHand();
    this.dealerHand = [];
    this.isPlayerTurn = true;
    this.gameStatus = 'PLAYING';
    
    // Create new deck if needed
    if (this.deck.length < 4) {
      this.deck = this.createDeck();
    }
    
    // Deal initial cards
    this.player.addCard(this.deck.pop()!);
    this.dealerHand.push(this.deck.pop()!);
    this.player.addCard(this.deck.pop()!);
    this.dealerHand.push(this.deck.pop()!);
    
    // Check for blackjack
    if (this.player.hasBlackjack() && this.getDealerValue() === 21) {
      // Both have blackjack - push
      this.isPlayerTurn = false;
      this.gameStatus = 'PUSH';
      // Return bet
      this.player.money += this.player.currentBet;
      this.player.currentBet = 0;
    } else if (this.player.hasBlackjack()) {
      // Player has blackjack - instant win (pays 3:2)
      this.isPlayerTurn = false;
      this.gameStatus = 'PLAYER_WINS';
      const bet = this.player.currentBet;
      // Blackjack pays 3:2, so winnings = bet * 1.5
      const winnings = Math.floor((bet * 3) / 2); // 3:2 odds
      this.player.money += bet + winnings; // Return bet + winnings
      this.player.currentBet = 0;
    } else if (this.getDealerValue() === 21) {
      // Dealer has blackjack - instant loss
      this.isPlayerTurn = false;
      this.gameStatus = 'DEALER_WINS';
      // Bet already deducted, just clear it
      this.player.currentBet = 0;
    }
  }

  dealCardsHidden(): void {
    // Reset hands for new round
    this.player.clearHand();
    this.dealerHand = [];
    this.isPlayerTurn = true;
    this.gameStatus = 'CARDS_DEALT'; // New status for when cards are dealt but hidden
    
    // Create new deck if needed
    if (this.deck.length < 4) {
      this.deck = this.createDeck();
    }
    
    // Deal initial cards (but keep them hidden)
    this.player.addCard(this.deck.pop()!);
    this.dealerHand.push(this.deck.pop()!);
    this.player.addCard(this.deck.pop()!);
    this.dealerHand.push(this.deck.pop()!);
  }

  playerHit(): void {
    if (this.isPlayerTurn && !this.player.isBusted()) {
      if (this.deck.length === 0) {
        this.deck = this.createDeck();
      }
      this.player.addCard(this.deck.pop()!);
      if (this.player.isBusted()) {
        this.isPlayerTurn = false;
        this.gameStatus = 'PLAYER_BUSTED';
        // Player loses - bet already deducted
        this.player.currentBet = 0;
      }
    }
  }

  playerStand(): void {
    if (this.isPlayerTurn && !this.player.isBusted()) {
      this.isPlayerTurn = false;
      this.player.hasStood = true;
      this.dealerPlay();
    }
  }

  private dealerPlay(): void {
    // Don't play if player already busted
    if (this.player.isBusted()) {
      return;
    }
    
    // Dealer must hit until 17 or higher
    while (this.getDealerValue() < 17) {
      if (this.deck.length === 0) {
        this.deck = this.createDeck();
      }
      this.dealerHand.push(this.deck.pop()!);
    }
    
    // Determine winner and pay out
    const dealerValue = this.getDealerValue();
    const playerValue = this.player.getHandValue();
    
    if (dealerValue > 21) {
      this.gameStatus = 'DEALER_BUSTED';
      // Player wins - return bet plus winnings (1:1 odds)
      const bet = this.player.currentBet;
      this.player.money += bet + bet; // Return bet + winnings (1:1)
      this.player.currentBet = 0;
    } else if (dealerValue > playerValue) {
      this.gameStatus = 'DEALER_WINS';
      // Player loses - bet already deducted, just clear the bet
      this.player.currentBet = 0;
    } else if (playerValue > dealerValue) {
      this.gameStatus = 'PLAYER_WINS';
      // Player wins - return bet plus winnings (1:1 odds)
      const bet = this.player.currentBet;
      this.player.money += bet + bet; // Return bet + winnings (1:1)
      this.player.currentBet = 0;
    } else {
      this.gameStatus = 'PUSH';
      // Push - return bet only (no winnings, no loss)
      const bet = this.player.currentBet;
      this.player.money += bet;
      this.player.currentBet = 0;
    }
  }

  getDealerValue(): number {
    let value = 0;
    let aces = 0;
    
    for (const card of this.dealerHand) {
      if (card.rank === 'Ace') {
        aces++;
        value += 11;
      } else {
        value += card.value;
      }
    }
    
    while (value > 21 && aces > 0) {
      value -= 10;
      aces--;
    }
    
    return value;
  }

  placeBet(amount: number): void {
    // Can only place bet if game is in NEW_GAME, CARDS_DEALT, or previous round is finished
    // Also check that player has enough money
    if (amount > 0 && 
        amount <= this.player.money &&
        this.player.money > 0 &&
        (this.gameStatus === 'NEW_GAME' || 
         this.gameStatus === 'CARDS_DEALT' ||
         this.gameStatus === 'PLAYER_WINS' || 
         this.gameStatus === 'DEALER_WINS' || 
         this.gameStatus === 'PLAYER_BUSTED' || 
         this.gameStatus === 'DEALER_BUSTED' || 
         this.gameStatus === 'PUSH')) {
      this.player.currentBet = amount;
      this.player.money -= amount;
    } else if (this.player.money <= 0) {
      throw new Error("You're out of money! Cannot place a bet.");
    } else if (amount > this.player.money) {
      throw new Error(`You don't have enough money! You have $${this.player.money}.`);
    } else {
      throw new Error('Cannot place bet while game is in progress.');
    }
  }

  startGame(): void {
    // Only start if cards are already dealt
    if (this.gameStatus !== 'CARDS_DEALT') {
      throw new Error('Cards must be dealt first before starting the game.');
    }
    
    // Check if bet is placed
    if (this.player.currentBet <= 0) {
      throw new Error('You must place a bet before starting the game.');
    }
    
    // Change status to PLAYING and check for blackjack
    this.gameStatus = 'PLAYING';
    
    // Check for blackjack
    if (this.player.hasBlackjack() && this.getDealerValue() === 21) {
      // Both have blackjack - push
      this.isPlayerTurn = false;
      this.gameStatus = 'PUSH';
      // Return bet
      const currentBet = this.player.currentBet;
      this.player.money += currentBet;
      this.player.currentBet = 0;
    } else if (this.player.hasBlackjack()) {
      // Player has blackjack - instant win (pays 3:2)
      this.isPlayerTurn = false;
      this.gameStatus = 'PLAYER_WINS';
      const bet = this.player.currentBet;
      // Blackjack pays 3:2, so winnings = bet * 1.5
      const winnings = Math.floor((bet * 3) / 2); // 3:2 odds
      this.player.money += bet + winnings;
      this.player.currentBet = 0;
    } else if (this.getDealerValue() === 21) {
      // Dealer has blackjack - instant loss
      this.isPlayerTurn = false;
      this.gameStatus = 'DEALER_WINS';
      // Bet already deducted, just clear it
      this.player.currentBet = 0;
    }
  }

  // Serialize game state for API responses
  toJSON(): {
    player: {
      money: number;
      hand: Card[];
      currentBet: number;
      hasStood: boolean;
      handValue: number;
      isBusted: boolean;
      hasBlackjack: boolean;
    };
    dealerHand: Card[];
    dealerValue: number;
    isPlayerTurn: boolean;
    gameStatus: string;
  } {
    return {
      player: {
        money: this.player.money,
        hand: this.player.hand,
        currentBet: this.player.currentBet,
        hasStood: this.player.hasStood,
        handValue: this.player.getHandValue(),
        isBusted: this.player.isBusted(),
        hasBlackjack: this.player.hasBlackjack(),
      },
      dealerHand: this.dealerHand,
      dealerValue: this.getDealerValue(),
      isPlayerTurn: this.isPlayerTurn,
      gameStatus: this.gameStatus,
    };
  }
}

