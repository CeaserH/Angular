import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    this.getPokemon();
   }

   getPokemon(){
     const blastoise = this._http.get('https://pokeapi.co/api/v2/pokemon/9');
     blastoise.subscribe(data => {
       console.log("Blastoise, I choose you!", data);
       console.log("Blastoise's abilities are: ", data.abilities[0].ability.name, "and", data.abilities[1].ability.name);
       console.log("Blastoise's type is: ", data.types[0].type.name);

      const torrent = this._http.get(data.abilities[1].ability.url);
      torrent.subscribe(data => {
        console.log("Blastoise, use Torrent!", data);
        console.log("Number of Pokemon who can use Torrent are: ", data.pokemon.length);
        for (var i = 0; i < data.pokemon.length; i++){
          console.log(data.pokemon[i].pokemon.name);
        }
      });
     });
   }
}
