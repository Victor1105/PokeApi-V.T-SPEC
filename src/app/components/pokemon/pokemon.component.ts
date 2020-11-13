import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon';
import { PokemonId } from '../../interfaces/pokemon-id';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.sass']
})
export class PokemonComponent implements OnInit {

  public pokemons: any;
  public pokemon: any = [];
  public sub: any;
  public query: string;
  public offset: number = 0;
  public limit: number = 50;
  constructor(
    private readonly pokemonService: PokemonService
  ) { }
 
  ngOnInit() {
    this.getPokemons();
    this.getAllPokemons();
  }

  onSubmit() {
    this.offset += 50;
    this.getPokemons();
  }

  getAllPokemons() {
    this.pokemonService
      .getAllPokemon()
      .subscribe((data: Pokemon[]) => {
        console.log('Data:', data);
      });
  }

  getPokemons() {
    this.pokemonService
      .getPokemon(this.offset, this.limit)
      .subscribe(
                  (data: Pokemon[]) => {
                  //console.log('Data:', data);
                    this.pokemons = data;
                    Object.keys(this.pokemons.results).map(key => {
                      this.showPokemon(this.pokemons.results[key].name);
                    });

                  }
                );
  }

  showPokemon(id: any) {
    this.pokemonService
      .getPokemonId(id)
      .subscribe((data: PokemonId) => {
        const newPokemon = {
          id: data.id,
          name: data.name,
          imageFront: data.sprites['front_default'],
          imageBack: data.sprites['back_default'],
          species: data['species'].url,
        };

        this.pokemon.push(newPokemon);
        this.pokemon.sort((array, order) => array.id - order.id);
      });
  }

}
