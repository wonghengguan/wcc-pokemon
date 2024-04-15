package com.wcc.pokemon.web.service;

import com.wcc.model.PokemonDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class PokemonService {

    @Autowired
    private PokeApiService pokeApiService;

    public ResponseEntity<String> getAllPokemon(int offset, int limit) {
        return pokeApiService.getAllPokemon(offset, limit);
    }

    public PokemonDetails getPokemonDetails(String pokemonName) {
        return pokeApiService.getPokemonDetails(pokemonName);
    }
}
