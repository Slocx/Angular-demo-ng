import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Article } from '../models/article';
import { Comment } from '../models/comment';

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

  createArticle(article: Article): Observable<Article>{
    // service qui récupére l'utilisateur connecté
    // let user = this.authService.getUser();
    // article.userId = user.id;
    article.userId = 1;
    return this.http.post<Article>(`${environment.apiUrl}/posts`, article);
  }

  /**
   * Récupére les commentaires d'un article
   * @param articleId id de l'article
   * @returns Observable avec les commentaires
   */
  getPostComments(articleId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${environment.apiUrl}/posts/${articleId}/comments`);
  }

}
