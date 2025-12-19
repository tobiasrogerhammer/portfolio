import { Card } from './Card';

export class Player {
  money: number;
  hand: Card[];
  currentBet: number;
  hasStood: boolean;

  constructor(initialMoney: number) {
    this.money = initialMoney;
    this.hand = [];
    this.currentBet = 0;
    this.hasStood = false;
  }

  addCard(card: Card): void {
    this.hand.push(card);
  }

  getHandValue(): number {
    let value = 0;
    let aces = 0;
    
    for (const card of this.hand) {
      if (card.rank === 'Ace') {
        aces++;
        value += 11;
      } else {
        value += card.value;
      }
    }
    
    // Adjust for aces
    while (value > 21 && aces > 0) {
      value -= 10;
      aces--;
    }
    
    return value;
  }

  isBusted(): boolean {
    return this.getHandValue() > 21;
  }

  hasBlackjack(): boolean {
    return this.hand.length === 2 && this.getHandValue() === 21;
  }

  clearHand(): void {
    this.hand = [];
    this.currentBet = 0;
    this.hasStood = false;
  }
}

