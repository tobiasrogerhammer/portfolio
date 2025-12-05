package com.tobias.blackjack.web;

import com.tobias.blackjack.model.Game;
import com.tobias.blackjack.model.Player;
import org.teavm.interop.Export;

/**
 * TeaVM entry point compiled to JavaScript.
 * Exposes minimal API to the browser to demonstrate game logic.
 */
public class TeaVmEntry {

    @Export(name = "startBlackjack")
    public static String startBlackjack() {
        Player player = new Player(100);
        Game game = new Game(player);
        game.dealInitialCards();

        // Return a minimal state string for JS to render
        return "PLAYER_VALUE=" + player.getHandValue() + "|DEALER_VALUE=" + game.getDealerValue();
    }
}

