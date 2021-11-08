import { Component } from '@angular/core';
import { Hero } from './shared/models/hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo-ng';
  cible = "Jean";

  // Variable qui contient mon héro en cours de création
  newHero: Hero = { nom: "", prenom: "", hp:0, hpMax:0 };

  users: any[] = [
    { nom: "Trabendo", prenom: "Michel" },
    { nom: "Dupond", prenom: "Jean" },
    { nom: "Dupont", prenom: "Jean" },
  ];

  heroes: Hero[] = [
    {nom:"Trabendo", prenom: "Michel", hpMax: 200, hp: 190},
    {nom:"Dupond", prenom: "Jean", hpMax: 400, hp: 70},
    {nom:"Leclercq", prenom: "Cyriak", hpMax: 100, hp: 10},
  ]

  changerCible = () => {
    this.cible = "truc";
  }

  addHero = () => {
    this.newHero.hp = this.newHero.hpMax;
    this.heroes.push(this.newHero);
    this.newHero = { nom: "", prenom: "", hp:0, hpMax:0 };
  }
}
