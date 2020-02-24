import { Injectable } from '@angular/core';

export interface Pokemon {
  name: string;
  num: number;
  imageURL: string;
  type: string;
  attack: number;
  defense: number;
  speed: number;
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  public pokemons: Pokemon[] = [
    {
      name: 'Bulbasaur',
      num: 1,
      imageURL: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
      type: 'Grass',
      attack: 49,
      defense: 49,
      speed: 45,
      id: 0
    },
    {
      name: 'Ivysaur',
      num: 2,
      imageURL: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png",
      type: 'Grass',
      attack: 62,
      defense: 63,
      speed: 60,
      id: 1
    },
    {
      name: 'Venusaur',
      num: 3,
      imageURL: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png",
      type: 'Grass',
      attack: 82,
      defense: 83,
      speed: 80,
      id: 2
    },
    {
      name: 'Charmander',
      num: 4,
      imageURL: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
      type: 'Fire',
      attack: 52,
      defense: 43,
      speed: 65,
      id: 3
    },
    {
      name: 'Charmeleon',
      num: 5,
      imageURL: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png",
      type: 'Fire',
      attack: 64,
      defense: 58,
      speed: 80,
      id: 4
    }
  ];

  constructor() { }

  public getPokemons(): Pokemon[] {
    return this.pokemons;
  }

  public getPokemonById(id: number): Pokemon {
    return this.pokemons[id];
  }
}
