import { Pokemon } from './pokemon/pokemon.model';

export interface PaginatedResponse {
  results: Pokemon[];
  count: number;
  // Add other pagination properties as needed
}
