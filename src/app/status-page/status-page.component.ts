import { Component, OnInit } from '@angular/core';
import { Hero } from '../shared/models/hero';
import { HeroService } from '../shared/services/hero.service';

@Component({
  selector: 'app-status-page',
  templateUrl: './status-page.component.html',
  styleUrls: ['./status-page.component.scss']
})
export class StatusPageComponent implements OnInit {

  cible = "Jean";

  // Variable qui contient mon héro en cours de création
  newHero: Hero = { nom: "", prenom: "", hp:0, hpMax:0 };
  // heroes!: Hero[];
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroes = this.heroService.getHeroes();
  }

  
  changerCible = () => {
    this.cible = "truc";
  }

  addHero = () => {
    this.newHero.hp = this.newHero.hpMax;
    this.heroService.createHero(this.newHero);
    this.newHero = { nom: "", prenom: "", hp:0, hpMax:0 };
  }

}
