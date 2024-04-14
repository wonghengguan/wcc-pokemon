package com.wcc.pokemon.web.controller;

import com.wcc.model.Pokemon;
import com.wcc.model.PokemonDetails;
import com.wcc.pokemon.web.service.PokemonService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1")
public class PokemonController {

    @Autowired
    private PokemonService pokemonService;

    @GetMapping("/pokemon")
    public ResponseEntity<List<Pokemon>> getAllPokemon() {
        List<Pokemon> pokemonList = pokemonService.getAllPokemon();
        return ResponseEntity.ok(pokemonList);
    }

    @GetMapping("/{pokemonName}")
    public ResponseEntity<PokemonDetails> getPokemonDetails(@PathVariable String pokemonName) {
        PokemonDetails details = pokemonService.getPokemonDetails(pokemonName);
        return ResponseEntity.ok(details);
    }
}
