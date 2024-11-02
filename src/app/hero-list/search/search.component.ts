import {Component, EventEmitter, inject, Output} from '@angular/core';
import {SuperHeroStore} from "../../store/super-hero.store";

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  superHeroStore = inject(SuperHeroStore);

  onSearchUpdated(value: string) {
    this.superHeroStore.updateFilter(value);
  }
}
