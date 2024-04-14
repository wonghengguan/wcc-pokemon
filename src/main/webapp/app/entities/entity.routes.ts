import { Routes } from '@angular/router';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';

const routes: Routes = [
  /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
  {
    path: 'pokemon',
    component: PokemonComponent,
    title: 'Pokemons',
  },
  {
    path: 'details/:name',
    component: PokemonDetailsComponent,
    title: 'Pokemon Detail',
  },
];

export default routes;
