import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../shared/models/user';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  id?: number = undefined;

  users: User[] = []

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    // récupérer l'id depuis l'url
    this.id = this.route.snapshot.params['id'];

    // récupération en asynchrone des params de l'url
    this.route.params.subscribe((params) => {
      console.log(params);
    })
    // appel du service
    this.userService.getUsers()
      // souscription aux changements de l'observable
      .subscribe(
        // dés qu'il y a une reponse
        (users: User[]) => {
          // j'assigne les utilisateurs récupére au tableau du composant
          this.users = users;
        }
      );

  }

}
