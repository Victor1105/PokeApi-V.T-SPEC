import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokemon';

@Component({
  selector: 'pokemon-side',
  templateUrl: './pokemon-side.component.html',
  styleUrls: ['./pokemon-side.component.sass']
})
export class PokemonSideComponent implements OnInit {

  @Input('pokemon') pokemon: Pokemon;

  constructor() { }

  ngOnInit() {
  }

}
