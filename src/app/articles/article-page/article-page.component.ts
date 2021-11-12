import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/shared/models/article';
import { ArticleService } from 'src/app/shared/services/article.service';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss']
})
export class ArticlePageComponent implements OnInit {

  articles: Article[] = [];

  constructor(private articleService: ArticleService, private router: Router) { }

  ngOnInit(): void {
    this.articleService.getArticles()
      .subscribe((articles:Article[])=> this.articles = articles);
  }

  newArticle(): void {
    this.router.navigate(['../articles/new']);
  }

}
