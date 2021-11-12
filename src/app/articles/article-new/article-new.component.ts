import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ArticleService } from 'src/app/shared/services/article.service';

@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.scss']
})
export class ArticleNewComponent implements OnInit {

  // contient le formulaire
  articleForm: FormGroup;

  constructor(private articleService: ArticleService, private router: Router) {
    // init du formulaire
    this.articleForm = new FormGroup({
      // les controls de chacun des inputs
      title: new FormControl("", Validators.required),
      body: new FormControl("", Validators.required)
    })
  }

  ngOnInit(): void {
  }

  createArticle(): void{
    if(this.articleForm.valid){
      this.articleService.createArticle(this.articleForm.value)
        .subscribe((_)=>{
          this.router.navigate(['../articles'])
        });
    }
  }

}
