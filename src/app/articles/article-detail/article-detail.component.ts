import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/shared/models/article';
import { Comment } from 'src/app/shared/models/comment';
import { ArticleService } from 'src/app/shared/services/article.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {

  articleId!: number;

  @Input() article!: Article;
  comments!: Comment[];

  constructor(private route: ActivatedRoute, private articleService: ArticleService) { }

  ngOnInit(): void {
    this.articleId = this.route.snapshot.params['id'];

    this.articleService.getArticle(this.articleId)
      .subscribe((article: Article) => {
        this.article = article;
      });

    this.articleService.getPostComments(this.articleId)
      .subscribe((comments) => {
        this.comments = comments;
        console.log(this.comments)
      })
  }

}
