package com.wcc.pokemon.web.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.wcc.model.PokemonDetails;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class PokeApiService {

    private final String baseUrl = "https://pokeapi.co/api/v2/";

    private final RestTemplate restTemplate;

    public PokeApiService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public ResponseEntity<String> getAllPokemon(int offset, int limit) {
        String url = baseUrl + "pokemon?offset=" + offset + "&limit=" + limit;
        ResponseEntity<String> responseEntity = restTemplate.getForEntity(url, String.class);
        if (responseEntity.getStatusCode() == HttpStatus.OK && responseEntity.getBody() != null) {
            return responseEntity;
        } else {
            throw new RuntimeException("Failed to fetch Pokemon list from PokeAPI");
        }
    }

    public PokemonDetails getPokemonDetails(String pokemonName) {
        String url = baseUrl + "pokemon/" + pokemonName;
        ResponseEntity<String> responseEntity = restTemplate.getForEntity(url, String.class);
        if (responseEntity.getStatusCode() == HttpStatus.OK && responseEntity.getBody() != null) {
            String json = responseEntity.getBody(); // JSON response from the API
            ObjectMapper objectMapper = new ObjectMapper();
            PokemonDetails pokemonDetails = new PokemonDetails();
            try {
                pokemonDetails = objectMapper.readValue(json, PokemonDetails.class);
            } catch (JsonMappingException e) {
                e.printStackTrace();
            } catch (JsonProcessingException e) {
                e.printStackTrace();
            }
            return pokemonDetails;
        } else {
            throw new RuntimeException("Failed to fetch details for Pokemon: " + pokemonName);
        }
    }
}
