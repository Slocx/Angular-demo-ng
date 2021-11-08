import { Component, OnInit } from '@angular/core';
import { Hero } from './shared/models/hero';
import { HeroService } from './shared/services/hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  cible = "Jean";

  // Variable qui contient mon héro en cours de création
  newHero: Hero = { nom: "", prenom: "", hp:0, hpMax:0 };

  users: any[] = [
    { nom: "Trabendo", prenom: "Michel" },
    { nom: "Dupond", prenom: "Jean" },
    { nom: "Dupont", prenom: "Jean" },
  ];

  // heroes!: Hero[];
  heroes: Hero[] = [];

  // Contructeur de la classe
  // est appelé quand un new AppComponent() est demandé (en général qu'une seule fois dans l'app)
  constructor(private heroService: HeroService){}

  // Appelé automatiquement à chaques fois que le composant est monté dans le DOM
  ngOnInit() {
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
