import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { IndexPageComponent } from './Pages/index-page/index-page.component';

const rutas: Routes = [
  {path: '', component: IndexPageComponent},
  {path: 'index', component: IndexPageComponent}/*,
  {path: 'register', component: RegisterPageComponent},
  {path: 'people', component: RegisterListPageComponent},
  {path: 'partner', component: PartnerListPageComponent}*/
];

@NgModule({
  declarations: [
    AppComponent,
    IndexPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
