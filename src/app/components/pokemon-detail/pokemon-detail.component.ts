import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokemon';
import { PokemonId } from 'src/app/interfaces/pokemon-id';
import { PokemonService } from 'src/app/services/pokemon.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.sass']
})
export class PokemonDetailComponent implements OnInit {

  public pokemons: Pokemon[];
  public pokemon: PokemonId;
  public sub: any;

  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getPokemonId();
  }

  getPokemonId() {
    this.sub = this.route.params.subscribe(params => {
      this.pokemonService
        .getPokemonId(params.id)
        .subscribe((data: PokemonId) => {
          this.pokemon = data;
        });
    });
  }

  showPokemon(id) {
    this.pokemonService
      .getPokemonId(id)
      .subscribe((data: PokemonId) => {
        this.pokemon = data;
      });
  }

  submitPokemon(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const id = form.get('id');
    this.showPokemon(id);
  }

}
