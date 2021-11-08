import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-coucou',
  templateUrl: './coucou.component.html',
  styleUrls: ['./coucou.component.scss']
})
export class CoucouComponent implements OnInit {
  // attribut de la classe = variable du composant
  @Input() target: string = "World";

  constructor() { }

  ngOnInit(): void {
  }

}
