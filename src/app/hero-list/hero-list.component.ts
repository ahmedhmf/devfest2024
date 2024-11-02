import {Component} from '@angular/core';
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
  protected readonly superHeroList = superHeros;
  protected filteredList = superHeros;

  onSearchOutput(searchString: string): void {
    this.filteredList = this.superHeroList.filter(x => x.name.toLowerCase().indexOf(searchString.toLowerCase()) > -1);
  }
}
