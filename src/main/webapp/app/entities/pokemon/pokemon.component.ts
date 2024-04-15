import { Component } from '@angular/core';
import { PokemonService } from './pokemon.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ItemCountComponent } from 'app/shared/pagination';
import { Pokemon } from './pokemon.model';
import { PaginatedResponse } from '../paginated-response.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'jhi-pokemon',
  standalone: true,
  imports: [CommonModule, RouterModule, ItemCountComponent, FormsModule],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.scss',
})
export class PokemonComponent {
  pokemonList: Pokemon[] = [];
  currentPage = 1;
  pageSize = 20;
  totalPages = 0;
  goToPage: number = 1;

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

  toUppercase(pokemonName: string): string {
    return pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.goToPage = this.currentPage;
    this.loadPokemon();
  }

  get pokemonListChunks(): any[][] {
    const chunkedArray: any[][] = [];
    for (let i = 0; i < this.pokemonList.length; i += 5) {
      chunkedArray.push(this.pokemonList.slice(i, i + 5));
    }
    return chunkedArray;
  }

  goToExactPage(): void {
    // Ensure the input value is valid
    if (this.goToPage >= 1 && this.goToPage <= this.totalPages) {
      this.onPageChange(this.goToPage); // Call onPageChange method with the selected page number
    } else {
      // Handle invalid page number (e.g., display an error message)
      console.error('Invalid page number');
    }
  }
}
