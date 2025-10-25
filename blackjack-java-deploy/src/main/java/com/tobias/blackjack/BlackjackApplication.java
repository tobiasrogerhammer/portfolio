package com.tobias.blackjack;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Main Spring Boot application for the Blackjack Web Wrapper
 * 
 * This application provides a web interface for the Java Blackjack game,
 * allowing visitors to play the game through their browser without downloads.
 */
@SpringBootApplication
public class BlackjackApplication {

    public static void main(String[] args) {
        SpringApplication.run(BlackjackApplication.class, args);
    }
}
