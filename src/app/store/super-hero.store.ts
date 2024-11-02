import {SuperHeroModel} from "../models/super-hero.model";
import {patchState, signalStore, withComputed, withHooks, withMethods, withState} from "@ngrx/signals";
import {superHeros} from "../superheros";
import {computed} from "@angular/core";

type SuperHeroState = {
  superHeroes: SuperHeroModel[];
  filter: string;
}

const initialState: SuperHeroState = {
  superHeroes: [],
  filter: '',
};

export const SuperHeroStore = signalStore(
  // step 1
  {providedIn: 'root'},
  withState(initialState),
  //step 3
  withMethods((store) => ({
    updateList(list: SuperHeroModel[]): void {
      patchState(store, {superHeroes: list});
    },
    updateFilter(filter: string): void {
      patchState(store, {filter})
    },
    addHero(hero: SuperHeroModel): void {
      patchState(store, {superHeroes: [...store.superHeroes(), hero]});
    }
  })),
  //step 4
  withComputed(({superHeroes, filter}) => ({
    heroesCount: computed(() => superHeroes().length),
    filterHeroes: computed(() => {
      return superHeroes().filter(x => x.name.toLowerCase().indexOf(filter().toLowerCase()) > -1)
    }),
  })),
  // step 2
  withHooks({
    onInit(store) {
      store.updateList(superHeros);
    },
    onDestroy(store) {
    },
  }),
);
