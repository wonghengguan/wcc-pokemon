import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class PokemonApiService {
  private apiUrl = 'https://pokeapi.co/api/v2';

  constructor() {}

  async getPokemonList(limit: number, offset: number): Promise<any> {
    try {
      const response = await axios.get(`${this.apiUrl}/pokemon`, {
        params: {
          limit: limit,
          offset: offset,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching Pokemon list:', error);
      throw error;
    }
  }

  async getPokemonDetails(pokemonName: string): Promise<any> {
    try {
      const response = await axios.get(`${this.apiUrl}/pokemon/${pokemonName}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching details for ${pokemonName}:`, error);
      throw error;
    }
  }
}
