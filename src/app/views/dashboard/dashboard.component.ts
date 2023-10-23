import { Component, OnInit } from '@angular/core';
import { GetPokemonService } from '../../services';
import { PokemonInformation } from '../../models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  view = false;
  pokedexNacional: PokemonInformation[] = [];

  constructor(public getPokemonService: GetPokemonService) {}

  ngOnInit(): void {
    this.displayPokedex();
  }

  displayPokedex() {

    for (let i = 1; i <= 1017; i++) {
      this.getPokemonService.getInformation(i.toString()).subscribe(
        (response: PokemonInformation) => {
          this.pokedexNacional.push(response);
          this.view = true;
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }
}



