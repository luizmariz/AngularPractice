import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { PokemonsComponent } from './pages/pokemons/pokemons.component';
import { HomeComponent } from './pages/home/home.component';
import { TrainerComponent } from './pages/trainer/trainer.component';
import { PokemonDetailsComponent } from './pages/pokemons/pokemon-details/pokemon-details.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'pokemons', component: PokemonsComponent },
  { path: 'trainer', component: TrainerComponent },
  { path: 'pokemons/:id', component: PokemonDetailsComponent }

 ];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
