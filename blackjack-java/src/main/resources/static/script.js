// Enhanced Blackjack Game JavaScript with Card Rendering
class BlackjackGame {
  constructor() {
    this.gameState = null;
    this.initializeElements();
    this.setupEventListeners();
  }

  initializeElements() {
    this.moneyDisplay = document.getElementById("money");
    this.betDisplay = document.getElementById("current-bet");
    this.dealerHand = document.getElementById("dealer-hand");
    this.playerHand = document.getElementById("player-hand");
    this.dealerValue = document.getElementById("dealer-value");
    this.playerValue = document.getElementById("player-value");
    this.gameStatus = document.getElementById("game-status");
    this.betAmount = document.getElementById("bet-amount");
    this.placeBetBtn = document.getElementById("place-bet-btn");
    this.hitBtn = document.getElementById("hit-btn");
    this.standBtn = document.getElementById("stand-btn");
    this.newGameBtn = document.getElementById("new-game-btn");
    this.betControls = document.getElementById("bet-controls");
    this.gameControls = document.getElementById("game-controls");
    this.newGameControls = document.getElementById("new-game-controls");

    // Update max bet when bet amount changes
    if (this.betAmount) {
      this.betAmount.addEventListener("input", () => {
        const currentMoney = this.gameState?.player?.money || 100;
        this.betAmount.max = currentMoney;
      });
    }
  }

  setupEventListeners() {
    this.placeBetBtn.addEventListener("click", () => this.placeBet());
    this.hitBtn.addEventListener("click", () => this.hit());
    this.standBtn.addEventListener("click", () => this.stand());
    this.newGameBtn.addEventListener("click", () => this.newGame());
  }

  async placeBet() {
    const amount = parseInt(this.betAmount.value);
    if (amount <= 0 || isNaN(amount)) {
      this.showStatus("Please enter a valid bet amount.", "error");
      return;
    }

    // Check if player has enough money
    const currentMoney = this.gameState?.player?.money || 100;
    if (amount > currentMoney) {
      this.showStatus(
        `You don't have enough money! You have $${currentMoney}.`,
        "error"
      );
      return;
    }

    if (currentMoney <= 0) {
      this.showStatus("You're out of money! Game over.", "error");
      this.placeBetBtn.disabled = true;
      return;
    }

    // Disable button during request
    this.placeBetBtn.disabled = true;
    this.showStatus("Starting game...", "info");

    try {
      // Check if cards are already dealt (CARDS_DEALT status)
      const cardsAlreadyDealt =
        this.gameState && this.gameState.gameStatus === "CARDS_DEALT";

      if (cardsAlreadyDealt) {
        // Cards are already dealt, just place bet and reveal
        // First place the bet
        let betResponse = await fetch("/api/game/bet", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: `amount=${amount}`,
        });

        if (!betResponse.ok) {
          throw new Error(`HTTP error! status: ${betResponse.status}`);
        }

        let betResult = await betResponse.json();
        if (!betResult.success) {
          this.showStatus(betResult.error || "Error placing bet", "error");
          this.placeBetBtn.disabled = false;
          return;
        }

        // Update gameState with bet result
        this.gameState = betResult.game;

        // Now reveal cards and start game
        let revealResponse = await fetch("/api/game/reveal", {
          method: "POST",
        });

        if (!revealResponse.ok) {
          throw new Error(`HTTP error! status: ${revealResponse.status}`);
        }

        const revealResult = await revealResponse.json();
        if (revealResult.success) {
          this.gameState = revealResult.game;
          // Update display to show revealed cards
          this.updateDisplay();

          // Check if game ended immediately (e.g., blackjack)
          const isGameOver =
            this.gameState.gameStatus &&
            this.gameState.gameStatus !== "NEW_GAME" &&
            this.gameState.gameStatus !== "PLAYING" &&
            this.gameState.gameStatus !== "CARDS_DEALT";

          if (isGameOver) {
            this.checkGameEnd();
          } else {
            this.showGameControls();
            this.showStatus("Game started! Hit or Stand.", "info");
            // Re-enable buttons for game controls
            this.hitBtn.disabled = false;
            this.standBtn.disabled = false;
          }
        } else {
          this.showStatus(revealResult.error || "Error starting game", "error");
          this.placeBetBtn.disabled = false;
        }
      } else {
        // Cards not dealt yet, use normal flow
        // First try to place bet with existing game
        let betResponse = await fetch("/api/game/bet", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: `amount=${amount}`,
        });

        let betResult = await betResponse.json();

        // If bet fails because no game exists, start a new game first
        if (!betResponse.ok || !betResult.success) {
          // Check if error is because no game exists
          if (betResult.error && betResult.error.includes("No active game")) {
            // Get current money if available
            let initialMoney = 100;
            if (this.gameState && this.gameState.player) {
              initialMoney = this.gameState.player.money || 100;
            }

            // Start new game
            let startResponse = await fetch("/api/game/start", {
              method: "POST",
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
              },
              body: `initialMoney=${initialMoney}`,
            });

            if (!startResponse.ok) {
              throw new Error(`HTTP error! status: ${startResponse.status}`);
            }

            const startResult = await startResponse.json();
            if (!startResult.success) {
              this.showStatus(
                startResult.error || "Error starting game",
                "error"
              );
              this.placeBetBtn.disabled = false;
              return;
            }
            this.gameState = startResult.game;

            // Now try to place bet again
            betResponse = await fetch("/api/game/bet", {
              method: "POST",
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
              },
              body: `amount=${amount}`,
            });

            if (!betResponse.ok) {
              throw new Error(`HTTP error! status: ${betResponse.status}`);
            }

            betResult = await betResponse.json();
          } else {
            // Some other error
            this.showStatus(betResult.error || "Error placing bet", "error");
            this.placeBetBtn.disabled = false;
            return;
          }
        }

        if (betResult.success) {
          this.gameState = betResult.game;
          this.updateDisplay();

          // Check if game ended immediately (e.g., blackjack)
          const isGameOver =
            this.gameState.gameStatus &&
            this.gameState.gameStatus !== "NEW_GAME" &&
            this.gameState.gameStatus !== "PLAYING" &&
            this.gameState.gameStatus !== "CARDS_DEALT";

          if (isGameOver) {
            this.checkGameEnd();
          } else {
            this.showGameControls();
            this.showStatus("Game started! Hit or Stand.", "info");
            // Re-enable buttons for game controls
            this.hitBtn.disabled = false;
            this.standBtn.disabled = false;
          }
        } else {
          this.showStatus(betResult.error || "Error placing bet", "error");
          this.placeBetBtn.disabled = false;
        }
      }
    } catch (error) {
      this.showStatus("Error: " + error.message, "error");
      console.error("Error in placeBet:", error);
      this.placeBetBtn.disabled = false;
    }
  }

  async hit() {
    try {
      this.hitBtn.disabled = true;
      this.standBtn.disabled = true;

      const response = await fetch("/api/game/hit", {
        method: "POST",
      });

      const result = await response.json();
      if (result.success) {
        this.gameState = result.game;
        console.log(
          "Hit response - player money:",
          this.gameState?.player?.money
        );
        this.updateDisplay();
        this.checkGameEnd();
        // Update display again after checkGameEnd to ensure money is shown
        this.updateDisplay();

        // Re-enable buttons if game is still ongoing
        if (
          this.gameState.gameStatus === "PLAYING" ||
          (this.gameState.isPlayerTurn && !this.gameState.player.isBusted)
        ) {
          this.hitBtn.disabled = false;
          this.standBtn.disabled = false;
        }
      } else {
        this.showStatus(result.error, "error");
        this.hitBtn.disabled = false;
        this.standBtn.disabled = false;
      }
    } catch (error) {
      this.showStatus("Error hitting: " + error.message, "error");
      this.hitBtn.disabled = false;
      this.standBtn.disabled = false;
    }
  }

  async stand() {
    try {
      this.hitBtn.disabled = true;
      this.standBtn.disabled = true;
      this.showStatus("Dealer is playing...", "info");

      const response = await fetch("/api/game/stand", {
        method: "POST",
      });

      const result = await response.json();
      if (result.success) {
        this.gameState = result.game;
        console.log("Stand response - gameState:", this.gameState);
        console.log("Stand response - gameStatus:", this.gameState?.gameStatus);
        console.log(
          "Stand response - player money:",
          this.gameState?.player?.money
        );
        // Small delay to show dealer playing message
        await this.delay(500);
        // Update display first to show updated money
        this.updateDisplay();
        // Check if game ended and show result
        this.checkGameEnd();
        // Update display again after checkGameEnd to ensure money is shown
        this.updateDisplay();
        // If game didn't end, something went wrong
        if (
          this.gameState.gameStatus &&
          this.gameState.gameStatus !== "NEW_GAME" &&
          this.gameState.gameStatus !== "PLAYING" &&
          this.gameState.gameStatus !== "PLAYER_WINS" &&
          this.gameState.gameStatus !== "DEALER_WINS" &&
          this.gameState.gameStatus !== "PLAYER_BUSTED" &&
          this.gameState.gameStatus !== "DEALER_BUSTED" &&
          this.gameState.gameStatus !== "PUSH"
        ) {
          console.log("Unexpected game status:", this.gameState.gameStatus);
        }
      } else {
        this.showStatus(result.error, "error");
        this.hitBtn.disabled = false;
        this.standBtn.disabled = false;
      }
    } catch (error) {
      this.showStatus("Error standing: " + error.message, "error");
      this.hitBtn.disabled = false;
      this.standBtn.disabled = false;
    }
  }

  async newGame() {
    try {
      // Check if player has money
      const currentMoney = this.gameState?.player?.money || 0;
      if (currentMoney <= 0) {
        this.showStatus(
          "You're out of money! Cannot start a new game.",
          "error"
        );
        return;
      }

      // Deal cards (hidden) when "Play Again" is clicked
      const response = await fetch("/api/game/deal", {
        method: "POST",
      });

      const result = await response.json();
      if (result.success) {
        this.gameState = result.game;
        this.updateDisplay();
        this.showBetControls();
        this.showStatus(
          "Cards dealt! Place your bet and click Start Game.",
          "info"
        );
        this.placeBetBtn.disabled = false;
      } else {
        this.showStatus(result.error || "Error dealing cards", "error");
      }
    } catch (error) {
      this.showStatus("Error dealing cards: " + error.message, "error");
    }
  }

  updateDisplay() {
    if (!this.gameState) return;

    // Update money and bet displays
    if (this.gameState.player) {
      // Get money value - handle both number and string
      let money = this.gameState.player.money;
      if (money === undefined || money === null) {
        money = 100;
      } else if (typeof money === "string") {
        money = parseInt(money) || 100;
      }

      // Get bet value - handle both number and string
      let bet = this.gameState.player.currentBet;
      if (bet === undefined || bet === null) {
        bet = 0;
      } else if (typeof bet === "string") {
        bet = parseInt(bet) || 0;
      }

      // Update display elements
      if (this.moneyDisplay) {
        this.moneyDisplay.textContent = `$${money}`;
      }
      if (this.betDisplay) {
        this.betDisplay.textContent = `$${bet}`;
      }

      // Check if player is out of money
      if (money <= 0) {
        this.showStatus("You're out of money! Game over.", "error");
        this.placeBetBtn.disabled = true;
        this.betAmount.disabled = true;
      } else {
        // Re-enable bet controls if player has money
        this.placeBetBtn.disabled = false;
        this.betAmount.disabled = false;
        // Update max bet amount
        this.betAmount.max = money;
      }

      console.log("Updated money display:", money, "bet display:", bet);
      console.log("Player object:", this.gameState.player);
    } else {
      console.log("No player object in gameState");
    }

    // Check if game is over - game is over if status is one of the end states
    const isGameOver =
      this.gameState.gameStatus === "PLAYER_WINS" ||
      this.gameState.gameStatus === "DEALER_WINS" ||
      this.gameState.gameStatus === "PLAYER_BUSTED" ||
      this.gameState.gameStatus === "DEALER_BUSTED" ||
      this.gameState.gameStatus === "PUSH";

    // Check if cards are dealt but hidden (CARDS_DEALT status)
    const cardsHidden = this.gameState.gameStatus === "CARDS_DEALT";

    // Update hands with beautiful card rendering
    const dealerHandArray = this.gameState.dealerHand || [];
    const playerHandArray = this.gameState.player?.hand || [];

    // If cards are hidden, show all cards as face-down
    // Otherwise, show normally (dealer: only first card if game not over, player: all cards)
    if (cardsHidden) {
      // Show all cards as face-down for both dealer and player
      this.updateHand(this.dealerHand, dealerHandArray, true, false, true);
      this.updateHand(this.playerHand, playerHandArray, false, false, true);
    } else {
      // Normal display
      this.updateHand(this.dealerHand, dealerHandArray, true, isGameOver);
      this.updateHand(this.playerHand, playerHandArray, false, false);
    }

    // Update hand values
    // If cards are hidden, show 0 for both
    if (cardsHidden) {
      this.dealerValue.textContent = "?";
      this.playerValue.textContent = "?";
    } else {
      // For dealer, only show first card value if game is not over
      let dealerValue;
      if (isGameOver) {
        dealerValue =
          this.gameState.dealerValue !== undefined
            ? this.gameState.dealerValue
            : this.calculateHandValue(dealerHandArray);
      } else {
        // Show only first card value during game
        dealerValue =
          dealerHandArray.length > 0
            ? this.getCardValue(dealerHandArray[0])
            : 0;
      }

      const playerValue =
        this.gameState.player?.handValue !== undefined
          ? this.gameState.player.handValue
          : this.calculateHandValue(playerHandArray);

      this.dealerValue.textContent = dealerValue;
      this.playerValue.textContent = playerValue;
    }
  }

  getCardValue(card) {
    if (!card) return 0;
    // Ace is worth 11 for display purposes (simplified)
    if (card.rank === "Ace") return 11;
    return card.value || 0;
  }

  calculateHandValue(hand) {
    if (!hand || hand.length === 0) return 0;
    let value = 0;
    let aces = 0;

    hand.forEach((card) => {
      if (card.rank === "Ace") {
        aces++;
        value += 11;
      } else {
        value += card.value || 0;
      }
    });

    while (value > 21 && aces > 0) {
      value -= 10;
      aces--;
    }

    return value;
  }

  updateHand(
    container,
    hand,
    isDealer = false,
    showAllCards = false,
    hideAllCards = false
  ) {
    container.innerHTML = "";

    if (hand && hand.length > 0) {
      hand.forEach((card, index) => {
        let cardElement;

        // If all cards should be hidden, show face-down for all
        if (hideAllCards) {
          cardElement = this.createFaceDownCard(index);
        }
        // For dealer: show only first card (index 0) if game is not over
        // All other cards (index > 0) should be face-down
        else if (isDealer && !showAllCards && index > 0) {
          // Show face-down card for dealer's hidden cards - NO CARD DATA AT ALL
          // Do NOT pass card object - create empty face-down card
          cardElement = this.createFaceDownCard(index);
        } else {
          // Show normal card (first dealer card or all player cards, or all cards when game is over)
          cardElement = this.createCardElement(card, index, isDealer);
        }

        container.appendChild(cardElement);
      });
    } else {
      container.innerHTML =
        '<div class="empty-state">Waiting for cards...</div>';
    }
  }

  createCardElement(card, index, isDealer = false) {
    const cardDiv = document.createElement("div");
    cardDiv.className = "playing-card";

    // Add delay for card animation
    cardDiv.style.animationDelay = `${index * 0.1}s`;

    const isRed = card.suit === "Hearts" || card.suit === "Diamonds";
    cardDiv.classList.add(isRed ? "red" : "black");

    // Get suit symbol
    const suitSymbol = this.getSuitSymbol(card.suit);
    const rankDisplay = this.getRankDisplay(card.rank);

    cardDiv.innerHTML = `
      <div class="card-rank-top">${rankDisplay}</div>
      <div class="card-suit-center">${suitSymbol}</div>
      <div class="card-rank-bottom">${rankDisplay}</div>
    `;

    return cardDiv;
  }

  createFaceDownCard(index) {
    // Create a completely new div - do NOT use any card data
    const cardDiv = document.createElement("div");

    // Set classes - card-back is critical, remove any color classes
    cardDiv.className = "playing-card card-back";
    // Explicitly remove red/black classes if they exist
    cardDiv.classList.remove("red", "black");

    // Add delay for card animation
    cardDiv.style.animationDelay = `${index * 0.1}s`;

    // CRITICAL: Only show back pattern - NO card data whatsoever
    // Clear any existing content first
    cardDiv.textContent = "";
    cardDiv.innerHTML = '<div class="card-back-pattern">🃏</div>';

    // Force styles to ensure it looks like a realistic face-down card
    // Note: width and height are handled by CSS media queries for responsive design
    cardDiv.style.background =
      "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)";
    cardDiv.style.color = "white";
    cardDiv.style.display = "flex";
    cardDiv.style.flexDirection = "row";
    cardDiv.style.alignItems = "center";
    cardDiv.style.justifyContent = "center";
    cardDiv.style.padding = "0";
    // Width and height are now controlled by CSS media queries
    cardDiv.style.border = "2px solid rgba(255, 255, 255, 0.3)";
    cardDiv.style.boxShadow =
      "inset 0 0 20px rgba(0, 0, 0, 0.5), 0 4px 8px rgba(0, 0, 0, 0.3)";

    // Mark as hidden card
    cardDiv.setAttribute("data-hidden", "true");
    cardDiv.setAttribute("data-face-down", "true");

    return cardDiv;
  }

  getSuitSymbol(suit) {
    const suits = {
      Hearts: "♥",
      Diamonds: "♦",
      Clubs: "♣",
      Spades: "♠",
    };
    return suits[suit] || "?";
  }

  getRankDisplay(rank) {
    const ranks = {
      Ace: "A",
      Jack: "J",
      Queen: "Q",
      King: "K",
    };
    return ranks[rank] || rank;
  }

  checkGameEnd() {
    if (!this.gameState || !this.gameState.gameStatus) {
      return;
    }

    console.log("checkGameEnd called with status:", this.gameState.gameStatus);

    // Check if game is actually over
    const isGameOver =
      this.gameState.gameStatus === "PLAYER_WINS" ||
      this.gameState.gameStatus === "DEALER_WINS" ||
      this.gameState.gameStatus === "PLAYER_BUSTED" ||
      this.gameState.gameStatus === "DEALER_BUSTED" ||
      this.gameState.gameStatus === "PUSH";

    console.log("isGameOver:", isGameOver);

    if (isGameOver) {
      // Update display to show all dealer cards and updated money
      this.updateDisplay();

      console.log(
        "Player money after updateDisplay:",
        this.gameState.player?.money
      );
      console.log("Player currentBet:", this.gameState.player?.currentBet);

      // Show appropriate message based on game status
      switch (this.gameState.gameStatus) {
        case "PLAYER_WINS":
          this.showStatus("🎉 You Win!", "win");
          break;
        case "DEALER_WINS":
          this.showStatus("😞 Dealer Wins!", "lose");
          // Check if player is out of money
          if (this.gameState.player?.money <= 0) {
            setTimeout(() => {
              this.showStatus("You're out of money! Game over.", "error");
            }, 1500);
          }
          break;
        case "PLAYER_BUSTED":
          this.showStatus("💥 You Busted!", "lose");
          // Check if player is out of money
          if (this.gameState.player?.money <= 0) {
            setTimeout(() => {
              this.showStatus("You're out of money! Game over.", "error");
            }, 1500);
          }
          break;
        case "DEALER_BUSTED":
          this.showStatus("🎉 Dealer Busted! You Win!", "win");
          break;
        case "PUSH":
          this.showStatus("🤝 Push! It's a tie!", "push");
          break;
        default:
          // Should not happen, but just in case
          console.log(
            "Unexpected game status in checkGameEnd:",
            this.gameState.gameStatus
          );
          this.showStatus("Game over!", "info");
      }

      // Show "Play Again" button
      this.showNewGameControls();

      // Force update display one more time to ensure money is shown correctly
      setTimeout(() => {
        this.updateDisplay();
      }, 100);
    }
  }

  showStatus(message, type = "info") {
    this.gameStatus.textContent = message;
    this.gameStatus.className = `game-status ${type}`;
  }

  showBetControls() {
    this.betControls.style.display = "flex";
    this.gameControls.style.display = "none";
    this.newGameControls.style.display = "none";
  }

  showGameControls() {
    this.betControls.style.display = "none";
    this.gameControls.style.display = "flex";
    this.newGameControls.style.display = "none";
  }

  showNewGameControls() {
    this.betControls.style.display = "none";
    this.gameControls.style.display = "none";
    this.newGameControls.style.display = "flex";
  }

  delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async initializeGame() {
    try {
      // Start a new game in the background so it's ready when user places bet
      const response = await fetch("/api/game/start", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: "initialMoney=100",
      });

      if (response.ok) {
        const result = await response.json();
        if (result.success) {
          this.gameState = result.game;
          this.updateDisplay();
        }
      }
    } catch (error) {
      console.error("Error initializing game:", error);
      // Don't show error to user, just log it
    }
  }
}

// Initialize the game when the page loads
document.addEventListener("DOMContentLoaded", () => {
  const game = new BlackjackGame();

  // Pre-initialize game state on page load
  game.initializeGame();
});
