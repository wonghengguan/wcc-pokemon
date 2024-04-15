import { Component } from '@angular/core';
import { PokemonService } from './pokemon.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ItemCountComponent } from 'app/shared/pagination';
import { Pokemon } from './pokemon.model';
import { PaginatedResponse } from '../paginated-response.model';

@Component({
  selector: 'jhi-pokemon',
  standalone: true,
  imports: [CommonModule, RouterModule, ItemCountComponent],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.scss',
})
export class PokemonComponent {
  pokemonList: Pokemon[] = [];
  currentPage = 1;
  pageSize = 20;
  totalPages = 0;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.loadPokemon();
  }

  loadPokemon(): void {
    const offset = (this.currentPage - 1) * this.pageSize;
    this.pokemonService.getPokemonList(offset, this.pageSize).subscribe((response: PaginatedResponse) => {
      this.pokemonList = response.results;
      this.totalPages = Math.ceil(response.count / this.pageSize);
    });
  }

  toUppercase(pokemonName: string) {
    return pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.loadPokemon();
  }

  get pokemonListChunks(): any[][] {
    const chunkedArray: any[][] = [];
    for (let i = 0; i < this.pokemonList.length; i += 5) {
      chunkedArray.push(this.pokemonList.slice(i, i + 5));
    }
    return chunkedArray;
  }
}
