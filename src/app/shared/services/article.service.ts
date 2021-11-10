import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  /**
   * Récupérer les articles depuis l'API
   * @returns Observable contenant la reponse avec les articles ou l'erreur Http
   */
  getArticles(): Observable<Article[]> {
    // récupération via client Http Angular
    return this.http.get<Article[]>(`${environment.apiUrl}/posts`);
  }

  getArticle(id: number): Observable<Article> {
    return this.http.get<Article>(`${environment.apiUrl}/posts/${id}`);
  }

}
