package com.tobias.blackjack.controller;

import com.tobias.blackjack.model.Game;
import com.tobias.blackjack.service.GameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

/**
 * REST Controller for the Blackjack game
 * 
 * Handles HTTP requests for game actions like starting a new game,
 * hitting, standing, and getting game state.
 */
@Controller
@RequestMapping("/api/game")
public class GameController {

    @Autowired
    private GameService gameService;

    /**
     * Serve the main game page
     */
    @GetMapping("/")
    public String gamePage(Model model) {
        return "forward:/index.html";
    }

    /**
     * Start a new game
     */
    @PostMapping("/start")
    @ResponseBody
    public ResponseEntity<Map<String, Object>> startGame(@RequestParam(defaultValue = "100") int initialMoney) {
        try {
            Game game = gameService.startNewGame(initialMoney);
            Map<String, Object> response = new HashMap<>();
            response.put("success", true);
            response.put("game", game);
            response.put("message", "New game started!");
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            Map<String, Object> response = new HashMap<>();
            response.put("success", false);
            response.put("error", e.getMessage());
            return ResponseEntity.badRequest().body(response);
        }
    }

    /**
     * Player hits (takes another card)
     */
    @PostMapping("/hit")
    @ResponseBody
    public ResponseEntity<Map<String, Object>> hit() {
        try {
            Game game = gameService.hit();
            Map<String, Object> response = new HashMap<>();
            response.put("success", true);
            response.put("game", game);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            Map<String, Object> response = new HashMap<>();
            response.put("success", false);
            response.put("error", e.getMessage());
            return ResponseEntity.badRequest().body(response);
        }
    }

    /**
     * Player stands (stops taking cards)
     */
    @PostMapping("/stand")
    @ResponseBody
    public ResponseEntity<Map<String, Object>> stand() {
        try {
            Game game = gameService.stand();
            Map<String, Object> response = new HashMap<>();
            response.put("success", true);
            response.put("game", game);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            Map<String, Object> response = new HashMap<>();
            response.put("success", false);
            response.put("error", e.getMessage());
            return ResponseEntity.badRequest().body(response);
        }
    }

    /**
     * Place a bet
     */
    @PostMapping("/bet")
    @ResponseBody
    public ResponseEntity<Map<String, Object>> placeBet(@RequestParam int amount) {
        try {
            Game game = gameService.placeBet(amount);
            Map<String, Object> response = new HashMap<>();
            response.put("success", true);
            response.put("game", game);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            Map<String, Object> response = new HashMap<>();
            response.put("success", false);
            response.put("error", e.getMessage());
            return ResponseEntity.badRequest().body(response);
        }
    }

    /**
     * Get current game state
     */
    @GetMapping("/state")
    @ResponseBody
    public ResponseEntity<Map<String, Object>> getGameState() {
        try {
            Game game = gameService.getCurrentGame();
            Map<String, Object> response = new HashMap<>();
            response.put("success", true);
            response.put("game", game);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            Map<String, Object> response = new HashMap<>();
            response.put("success", false);
            response.put("error", e.getMessage());
            return ResponseEntity.badRequest().body(response);
        }
    }

    /**
     * Deal cards without starting the game
     */
    @PostMapping("/deal")
    @ResponseBody
    public ResponseEntity<Map<String, Object>> dealCards() {
        try {
            Game game = gameService.dealCards();
            Map<String, Object> response = new HashMap<>();
            response.put("success", true);
            response.put("game", game);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            Map<String, Object> response = new HashMap<>();
            response.put("success", false);
            response.put("error", e.getMessage());
            return ResponseEntity.badRequest().body(response);
        }
    }

    /**
     * Start the game by revealing cards
     */
    @PostMapping("/reveal")
    @ResponseBody
    public ResponseEntity<Map<String, Object>> startGame() {
        try {
            Game game = gameService.startGame();
            Map<String, Object> response = new HashMap<>();
            response.put("success", true);
            response.put("game", game);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            Map<String, Object> response = new HashMap<>();
            response.put("success", false);
            response.put("error", e.getMessage());
            return ResponseEntity.badRequest().body(response);
        }
    }
}

