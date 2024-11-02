import {Component, viewChild} from '@angular/core';
import {superHeros} from "../superheros";
import {SearchComponent} from "./search/search.component";
import {JsonPipe, NgOptimizedImage} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-hero-list',
  standalone: true,
  imports: [
    SearchComponent,
    NgOptimizedImage,
    RouterLink,
    JsonPipe
  ],
  templateUrl: './hero-list.component.html',
  styleUrl: './hero-list.component.css'
})
export class HeroListComponent {
  superHeroList = superHeros;
  filteredList = superHeros;
  herosNumber = superHeros.length;

  onSearchOutput(searchString: string): void {
    this.filteredList = this.superHeroList.filter(x => x.name.toLowerCase().indexOf(searchString.toLowerCase()) > -1);
  }

  addHero() {
    superHeros.push(
      {
        "id": 2,
        "name": "Batman",
        "slug": "70-batman",
        "powerstats": {
          "intelligence": 100,
          "strength": 26,
          "speed": 27,
          "durability": 50,
          "power": 47,
          "combat": 100
        },
        "appearance": {
          "gender": "Male",
          "race": "Human",
          "height": ["6'2", "188 cm"],
          "weight": ["210 lb", "95 kg"],
          "eyeColor": "blue",
          "hairColor": "black"
        },
        "biography": {
          "fullName": "Bruce Wayne",
          "alterEgos": "No alter egos found.",
          "aliases": ["Insider", "Matches Malone"],
          "placeOfBirth": "Crest Hill, Bristol Township; Gotham County",
          "firstAppearance": "Detective Comics #27",
          "publisher": "DC Comics",
          "alignment": "good"
        },
        "work": {
          "occupation": "Businessman",
          "base": "Batcave, Stately Wayne Manor, Gotham City; Hall of Justice, Justice League Watchtower"
        },
        "connections": {
          "groupAffiliation": "Batman Family, Batman Incorporated, Justice League, Outsiders, Wayne Enterprises, Club of Heroes, formerly White Lantern Corps, Sinestro Corps",
          "relatives": "Damian Wayne (son), Dick Grayson (adopted son), Tim Drake (adopted son), Jason Todd (adopted son), Cassandra Cain (adopted ward)\nMartha Wayne (mother, deceased), Thomas Wayne (father, deceased), Alfred Pennyworth (former guardian), Roderick Kane (grandfather, deceased), Elizabeth Kane (grandmother, deceased), Nathan Kane (uncle, deceased), Simon Hurt (ancestor), Wayne Family"
        },
        "images": {
          "xs": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/xs/70-batman.jpg",
          "sm": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/70-batman.jpg",
          "md": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/70-batman.jpg",
          "lg": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/70-batman.jpg"
        }

      });
    //Adding a new Super Hero
    // this.superHeroList = superHeros;
    // this.herosNumber = superHeros.length;
  }

}
