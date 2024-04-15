import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PokemonService } from '../pokemon/pokemon.service';
import { CommonModule } from '@angular/common';
import { PokemonDetails } from './pokemon-details.model';

@Component({
  selector: 'jhi-pokemon-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './pokemon-details.component.html',
  styleUrl: './pokemon-details.component.scss',
})
export class PokemonDetailsComponent {
  pokemonDetails: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokemonService: PokemonService,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const pokemonName = params.get('name');
      if (pokemonName) {
        this.getPokemonDetails(pokemonName);
      }
    });
  }

  getPokemonDetails(pokemonName: string): void {
    this.pokemonService.getPokemonDetails(pokemonName).subscribe({
      next: (data: PokemonDetails) => {
        this.pokemonDetails = data; // Assign the received data to pokemonDetails
      },
      error: error => {
        console.error('Error fetching Pokemon details:', error);
      },
    });
    const pokemonNameUppecase = this.toUppercase(pokemonName);
    document.title = `${pokemonNameUppecase}'s details`;
  }

  goBack(): void {
    // Navigate back to Pokemon list page
    this.router.navigate(['']);
  }

  toUppercase(pokemonName: string): string {
    return pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);
  }
}
