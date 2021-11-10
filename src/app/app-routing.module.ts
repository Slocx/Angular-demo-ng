import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleDetailComponent } from './articles/article-detail/article-detail.component';
import { ArticlePageComponent } from './articles/article-page/article-page.component';
import { CoucouPageComponent } from './coucou-page/coucou-page.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { StatusPageComponent } from './status-page/status-page.component';
import { UserPageComponent } from './user-page/user-page.component';

// tableau qui contient les routes
// (peut être mis dans un fichier à part et importé ici)
const routes: Routes = [
  // redirection quand l'utilisateur arrive sur le chemin /
  { path: "", redirectTo: "status", pathMatch: "full" },
  // en fonction du chemin, Angular charge un composant
  { path: "status", component: StatusPageComponent },
  { path: "coucou", component: CoucouPageComponent },
  // route imbriquées
  {
    // préfixe de la route
    path: "users",
    // toutes les routes enfants de la route users
    children: [
      { path: "", component: UserPageComponent, pathMatch: "full" },
      { path: ":id", component: UserPageComponent, pathMatch: "prefix" },
      { path: ":id/post", component: UserPageComponent, pathMatch: "prefix" },
      { path: ":id/profil", component: UserPageComponent, pathMatch: "prefix" },
      { path: ":id/edit", component: UserPageComponent, pathMatch: "prefix" },
    ]
  },
  {
    path: "articles", children: [
      { path: "", component: ArticlePageComponent },
      { path: ":id", component: ArticleDetailComponent },
    ]
  },
  // Wildcard pour afficher un composant en cas de non existance de la page
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
