import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CoucouPageComponent } from './coucou-page/coucou-page.component';
import { StatusPageComponent } from './status-page/status-page.component';

const routes: Routes = [
  { path: "", component: AppComponent },
  { path: "status", component: StatusPageComponent },
  { path: "coucou", component: CoucouPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
