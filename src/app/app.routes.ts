import { Routes } from '@angular/router';
import {HeroListComponent} from "./hero-list/hero-list.component";
import {HeroComponent} from "./hero/hero.component";

export const routes: Routes = [
  {path: '', component: HeroListComponent},
  {path: 'hero/:id', component: HeroComponent}
];
