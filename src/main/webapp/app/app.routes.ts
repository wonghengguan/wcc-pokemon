import { Routes } from '@angular/router';
import { errorRoute } from './layouts/error/error.route';
import { PokemonComponent } from './entities/pokemon/pokemon.component';
import { PokemonDetailsComponent } from './entities/pokemon-details/pokemon-details.component';

const routes: Routes = [
  {
    path: '',
    component: PokemonComponent,
    title: 'Pokemons',
  },
  {
    path: 'details/:name',
    component: PokemonDetailsComponent,
    title: 'Pokemon details',
  },
  ...errorRoute,
];

export default routes;
