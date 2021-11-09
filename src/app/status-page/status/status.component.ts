import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {

  // Variable pouvant être récupérée via composant parent gràce au @Input()
  @Input() hero: any;

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Taper sur le héro
   * @param degats Nombre de points de vie à retirer
   */
  taper = (degats: number): void => {
    if (this.hero.hp - degats <= 0) {
      this.hero.hp = 0;
    } else {
      this.hero.hp -= degats;
    }
  }

  tuer = () => {
    this.hero.hp = 0;
  }

}
