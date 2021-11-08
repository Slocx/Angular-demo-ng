import { Injectable } from '@angular/core';
import { Hero } from '../models/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  heroes: Hero[] = [
    {nom:"Trabendo", prenom: "Michel", hpMax: 200, hp: 190},
    {nom:"Dupond", prenom: "Jean", hpMax: 400, hp: 70},
    {nom:"Leclercq", prenom: "Cyriak", hpMax: 100, hp: 10},
  ]

  constructor() { }

  getHeroes = (): Hero[] => {
    return this.heroes;
  }

  createHero = (hero: Hero): void => {
    this.heroes.push(hero);
  }
}
