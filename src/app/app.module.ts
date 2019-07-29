import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { IndexPageComponent } from './Pages/index-page/index-page.component';
import { NavbarPrincipalComponent } from './Components/General/navbar-principal/navbar-principal.component';
import { CarouselPrincipalComponent } from './Components/General/carousel-principal/carousel-principal.component';
import { DescriptionPrincipalComponent } from './Components/General/description-principal/description-principal.component';
import { ImagePrincipalComponent } from './Components/General/image-principal/image-principal.component';

const rutas: Routes = [
  {path: '', component: IndexPageComponent},
  {path: 'index', component: IndexPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    IndexPageComponent,
    NavbarPrincipalComponent,
    CarouselPrincipalComponent,
    DescriptionPrincipalComponent,
    ImagePrincipalComponent
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
