import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoucouComponent } from './coucou-page/coucou/coucou.component';
import { StatusComponent } from './status-page/status/status.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { StatusPageComponent } from './status-page/status-page.component';
import { CoucouPageComponent } from './coucou-page/coucou-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { UserCardComponent } from './user-page/user-card/user-card.component';
import { ArticlePageComponent } from './articles/article-page/article-page.component';
import { ArticleComponent } from './articles/article-page/article/article.component';
import { ArticleDetailComponent } from './articles/article-detail/article-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CoucouComponent,
    StatusComponent,
    NavbarComponent,
    StatusPageComponent,
    CoucouPageComponent,
    UserPageComponent,
    NotFoundComponent,
    UserCardComponent,
    ArticlePageComponent,
    ArticleComponent,
    ArticleDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
