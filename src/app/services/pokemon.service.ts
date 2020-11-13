import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Pokemon } from '../interfaces/pokemon';
import { PokemonId } from '../interfaces/pokemon-id';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  public pokeApi: any;

  constructor(
    private http: HttpClient
  ) {
    this.pokeApi = environment.pokemonUrl;
  }
 
  getPokemon(id: number, limit: number): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(`${this.pokeApi}?offset=${id}&limit=${limit}`);
  }

  getAllPokemon(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(`${this.pokeApi}`);
  }

  getPokemonId(id): Observable<PokemonId> {
    return this.http.get<PokemonId>(`${this.pokeApi}/${id}`);
  }
}
