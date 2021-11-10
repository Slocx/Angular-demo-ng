import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  @Input() user!: User;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  deleteUser(): void {
    this.userService.deleteUserById(this.user.id)
      .subscribe((_)=>{
        this.router.navigate(['../status'])
      })
  }

  editUser(): void {

  }

}
