import { Component } from '@angular/core';
import { PokemonService, Pokemon } from '../services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private pokemon: PokemonService) {}

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getPokemons(): Pokemon[] {
    return this.pokemon.getPokemons();
  }

}
