import { Component } from '@angular/core';
import { PokemonApiService } from './pokemon.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ItemCountComponent } from 'app/shared/pagination';

@Component({
  selector: 'jhi-pokemon',
  standalone: true,
  imports: [CommonModule, RouterModule, ItemCountComponent],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.scss',
})
export class PokemonComponent {
  pokemonList: any[] = [];
  currentPage = 1;
  totalPokemon = 0;
  pageSize = 20;
  pages: number[] = [];
  totalPages = 0;

  constructor(private pokemonApiService: PokemonApiService) {}

  ngOnInit(): void {
    this.getPokemonList(this.currentPage);
  }

  async getPokemonList(page: number) {
    try {
      const offset = (page - 1) * this.pageSize;
      const response = await this.pokemonApiService.getPokemonList(this.pageSize, offset);
      this.pokemonList = response.results;
      this.totalPokemon = response.count;
      this.calculatePages();
    } catch (error) {
      // Handle error
    }
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.getPokemonList(this.currentPage);
  }

  calculatePages() {
    this.totalPages = Math.ceil(this.totalPokemon / this.pageSize);
    this.pages = [];
    for (let i = 1; i <= this.totalPages; i++) {
      this.pages.push(i);
    }
  }

  get pokemonListChunks(): any[][] {
    const chunkedArray: any[][] = [];
    for (let i = 0; i < this.pokemonList.length; i += 5) {
      chunkedArray.push(this.pokemonList.slice(i, i + 5));
    }
    return chunkedArray;
  }

  toUppercase(pokemonName: string) {
    return pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);
  }
}
