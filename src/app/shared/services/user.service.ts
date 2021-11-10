import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  // Injection du client Http pour lancer les requêttes
  constructor(private http: HttpClient) { }

  // Créer un observable qui va (peut être) retourner un tableau d'utilisateur
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.apiUrl}/users`);
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${environment.apiUrl}/users/${id}`);
  }

  updateUser(id: number, user: User): Observable<User> {
    return this.http.put<User>(`${environment.apiUrl}/users/${id}`, user);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${environment.apiUrl}/users`, user);
  }

  deleteUser(user: User): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/users/${user.id}`)
  }

  deleteUserById(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/users/${id}`)
  }

}
