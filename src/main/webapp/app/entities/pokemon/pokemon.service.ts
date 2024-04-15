import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Pokemon } from './pokemon.model';
import { PokemonDetails } from '../pokemon-details/pokemon-details.model';
import { PaginatedResponse } from '../paginated-response.model';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private baseUrl = 'http://localhost:8080/api/v1/pokemon';

  constructor(private http: HttpClient) {}

  getPokemonList(offset: number, limit: number): Observable<PaginatedResponse> {
    const params = new HttpParams().set('limit', limit.toString()).set('offset', offset.toString());

    return this.http.get<any>(this.baseUrl, { params }).pipe(
      map(response => ({
        results: response.results.map((pokemon: any) => new Pokemon(pokemon.name, pokemon.url)),
        count: response.count,
        nextOffset: response.next ? this.getOffsetFromUrl(response.next) : null,
        previousOffset: response.previous ? this.getOffsetFromUrl(response.previous) : null,
      })),
    );
  }

  getPokemonDetails(pokemonName: string): Observable<PokemonDetails> {
    return this.http.get<PokemonDetails>(`${this.baseUrl}/${pokemonName}`);
  }

  private getOffsetFromUrl(url: string): number {
    const params = new URLSearchParams(url.split('?')[1]);
    return parseInt(params.get('offset') ?? '0', 10);
  }
}
