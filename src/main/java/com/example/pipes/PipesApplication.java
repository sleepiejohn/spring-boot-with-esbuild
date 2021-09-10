package com.example.pipes;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@SpringBootApplication
public class PipesApplication {

	public static void main(String[] args) {
		SpringApplication.run(PipesApplication.class, args);
	}

	@Controller
	public static class HomeController {
		@GetMapping("/")
		String home() {
			return "index";
		}
	}
}
