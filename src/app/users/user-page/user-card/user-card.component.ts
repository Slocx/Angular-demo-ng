import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  // Output: remonté d'information vers le composant parent
  @Output() deleteEmitter: EventEmitter<string> = new EventEmitter<string>();

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  deleteUser(): void {
    if (this.user.id) {
      this.userService.deleteUserById(this.user.id)
        .subscribe((_) => {
          // this.router.navigate(['../status'])
          this.deleteEmitter.emit();
        })
    }
  }

  editUser(): void {
    this.router.navigate([`../users/${this.user.id}/edit`])
  }

}
