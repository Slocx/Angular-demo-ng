import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coucou-page',
  templateUrl: './coucou-page.component.html',
  styleUrls: ['./coucou-page.component.scss']
})
export class CoucouPageComponent implements OnInit {

  users: any[] = [
    { nom: "Trabendo", prenom: "Michel" },
    { nom: "Dupond", prenom: "Jean" },
    { nom: "Dupont", prenom: "Jean" },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
