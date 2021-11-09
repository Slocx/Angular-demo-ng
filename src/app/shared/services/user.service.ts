import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers(): User[] {
    return [];
  }

  getUser(id: number): User | null {
    return null;
  }

  createUser(): void {

  }

  deleteUser(): void {

  }

}
