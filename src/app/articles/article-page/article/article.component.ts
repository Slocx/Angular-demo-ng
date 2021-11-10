import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/shared/models/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  @Input() article!: Article;

  date: string = Date();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  viewArticle(): void {
    this.router.navigate(['../articles', this.article.id]);
  }

}
