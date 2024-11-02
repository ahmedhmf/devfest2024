import {Component, inject} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {superHeros} from "../superheros";
import {NgClass, NgOptimizedImage, TitleCasePipe} from "@angular/common";
import {SuperHeroModel} from "../models/super-hero.model";
import {PowerComponent} from "./power/power.component";

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    NgOptimizedImage,
    PowerComponent,
    RouterLink,
    NgClass,
    TitleCasePipe
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  heroID = Number(this.route.snapshot.paramMap.get('id'));
  selectedHero: SuperHeroModel = superHeros.filter(x => x.id === this.heroID)[0];
  maxId = superHeros.reduce((acc, value) => {
    return (acc = acc > value.id ? acc : value.id);
  }, 0);

  onPreviousClick() {
    const prevId = this.heroID - 1;
    this.router.navigateByUrl('/', {skipLocationChange: true})
      .then(() => this.router.navigate(['/hero', prevId]));
  }

  onNextClick() {
    const next = this.heroID + 1;
    this.router.navigateByUrl('/', {skipLocationChange: true})
      .then(() => this.router.navigate(['/hero', next]));
  }

  getBadgeClass() {
    switch (this.selectedHero.biography.alignment) {
      case 'good':
        return 'badge-primary';
      case 'bad':
        return 'badge-error';
      default:
        return 'badge-neutral';
    }
  }

  getLogo() {
    if (this.selectedHero.biography.publisher === 'Marvel Comics') {
      return './marvel.png';
    }
    return 'DC_Comics.png';
  }
}
