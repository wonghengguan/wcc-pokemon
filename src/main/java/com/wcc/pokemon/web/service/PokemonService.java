package com.wcc.pokemon.web.service;

import com.wcc.model.Pokemon;
import com.wcc.model.PokemonDetails;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PokemonService {

    @Autowired
    private PokeApiService pokeApiService;

    public List<Pokemon> getAllPokemon() {
        return pokeApiService.getAllPokemon();
    }

    public PokemonDetails getPokemonDetails(String pokemonName) {
        return pokeApiService.getPokemonDetails(pokemonName);
    }
}
