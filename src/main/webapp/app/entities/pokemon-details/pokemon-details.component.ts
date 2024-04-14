import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PokemonApiService } from '../pokemon/pokemon.service';
import { CommonModule } from '@angular/common';

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
    private pokemonApiService: PokemonApiService,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const pokemonName = params.get('name');
      if (pokemonName) {
        this.getPokemonDetails(pokemonName);
      }
    });
  }

  async getPokemonDetails(pokemonName: string) {
    try {
      this.pokemonDetails = await this.pokemonApiService.getPokemonDetails(pokemonName);

      const pokemonNameUppecase = this.toUppercase(pokemonName);
      document.title = `${pokemonNameUppecase}'s details`;
    } catch (error) {
      // Handle error
    }
  }

  goBack() {
    // Navigate back to Pokemon list page
    this.router.navigate(['']);
  }

  toUppercase(pokemonName: string) {
    return pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);
  }
}
