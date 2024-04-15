package com.wcc.pokemon.web.controller;

import static org.mockito.Mockito.when;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.wcc.model.PokemonDetails;
import com.wcc.pokemon.web.service.PokemonService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

@SpringBootTest
@AutoConfigureMockMvc
public class PokemonControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private PokemonService pokemonService;

    @Autowired
    private ObjectMapper objectMapper;

    @Test
    public void getPokemonDetails_ReturnsOk() throws Exception {
        // Mock PokemonDetails object
        PokemonDetails pokemonDetails = new PokemonDetails();
        pokemonDetails.setName("bulbasaur");

        // Mock the behavior of the PokemonService
        when(pokemonService.getPokemonDetails("bulbasaur")).thenReturn(pokemonDetails);

        // Perform the GET request and verify the response
        mockMvc
            .perform(MockMvcRequestBuilders.get("/api/v1/pokemon/bulbasaur").contentType(MediaType.APPLICATION_JSON))
            .andExpect(MockMvcResultMatchers.status().isOk())
            .andExpect(MockMvcResultMatchers.content().contentType(MediaType.APPLICATION_JSON))
            .andExpect(MockMvcResultMatchers.jsonPath("$.name").value("bulbasaur"));
    }
}
