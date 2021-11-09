import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoucouComponent } from './coucou-page/coucou/coucou.component';
import { StatusComponent } from './status-page/status/status.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { StatusPageComponent } from './status-page/status-page.component';
import { CoucouPageComponent } from './coucou-page/coucou-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CoucouComponent,
    StatusComponent,
    NavbarComponent,
    StatusPageComponent,
    CoucouPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
