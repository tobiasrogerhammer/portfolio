package com.tobias.blackjack;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * Simple web controller to serve the Blackjack game interface
 */
@Controller
public class WebController {

    @GetMapping("/")
    public String index() {
        return "forward:/index.html";
    }
}
