import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { UserService } from 'src/app/shared/services/user.service';
import { FormGroup, FormArray, Validators, FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  user!: User;
  userId!: number;

  userForm: FormGroup;

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) {
    this.userForm = new FormGroup({
      name: new FormControl("", [Validators.required, Validators.minLength(5)]),
      username: new FormControl("", [Validators.required, Validators.minLength(4)]),
      email: new FormControl("", Validators.email),
      phone: new FormControl("", [Validators.required,
        // regexp pour valider le numéro de tel
        //  Validators.pattern(/^(?:(?:\+|00)33|0)s*[1-9](?:[\s.-]*\d{2}){4}$/)
      ]),
      website: new FormControl("", Validators.pattern(/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&\/=]*)/)),
    });
  }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['id'];
    this.userService.getUser(this.userId)
      .subscribe((user: User) => {
        this.user = user;
        delete user.id;
        this.userForm.setValue({...user});
      })
  }

  editUser(): void {
    if (this.userForm.valid) {
      this.userService.updateUser(this.userId, this.userForm.value)
        .subscribe((_) => {
          this.router.navigate(['../users']);
        })
    }
  }

}
