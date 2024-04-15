import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../pokemon/pokemon.service';
import { PokemonDetails } from './pokemon-details.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'jhi-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class PokemonDetailsComponent implements OnInit {
  pokemonDetails: PokemonDetails | undefined;

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
    this.pokemonService.getPokemonDetails(pokemonName).subscribe(
      (data: PokemonDetails) => {
        this.pokemonDetails = data;
        this.setPageTitle(pokemonName);
      },
      error => {
        console.error('Error fetching Pokemon details:', error);
      },
    );
  }

  goBack(): void {
    this.router.navigate(['']);
  }

  toUppercase(pokemonName: string | undefined): string {
    return pokemonName!.charAt(0).toUpperCase() + pokemonName!.slice(1);
  }

  private setPageTitle(pokemonName: string): void {
    const pokemonNameUppecase = this.toUppercase(pokemonName);
    document.title = `${pokemonNameUppecase}'s details`;
  }
}
