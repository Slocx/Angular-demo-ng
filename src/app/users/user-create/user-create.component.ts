import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormArray, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {

  // attribut du composant qui contient le formulaire
  userForm: FormGroup;

  constructor(private userService: UserService, private router: Router) {
    // création du formulaire à la création du composant
    this.userForm = new FormGroup({
      // un formControl par input
      name: new FormControl("Michel", [Validators.required, Validators.minLength(5)]),
      username: new FormControl("", [Validators.required, Validators.minLength(5)]),
      email: new FormControl("", Validators.email),
      phone: new FormControl("", [Validators.required,Validators.pattern(/^(?:(?:\+|00)33|0)s*[1-9](?:[\s.-]*\d{2}){4}$/)]),
      website: new FormControl("", Validators.pattern(/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&\/=]*)/)),
    })
  }

  ngOnInit(): void {
  }

  sendForm(): void {
    // si le formulaire est valide
    if(this.userForm.valid){
      // j'envois mon utilisateur à l'API
      this.userService.createUser(this.userForm.value)
      // si on ne se sert pas de la reponse on mets un "_" en param du callback
        .subscribe((_)=>{
          this.router.navigate(['../users']);
        })
    }
    console.log(this.userForm);
  }

}
