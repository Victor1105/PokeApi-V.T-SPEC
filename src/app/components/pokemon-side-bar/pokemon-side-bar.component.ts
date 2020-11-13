import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokemon';

@Component({
  selector: 'pokemon-side-bar',
  templateUrl: './pokemon-side-bar.component.html',
  styleUrls: ['./pokemon-side-bar.component.sass']
})
export class PokemonSideBarComponent implements OnInit {

  @Input("pokemon") pokemon: Pokemon;

  constructor() { }

  ngOnInit() {
  }

}
