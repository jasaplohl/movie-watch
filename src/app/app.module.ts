import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { MainPageComponent } from './main-page/main-page.component';
import { HeaderComponent } from './header/header.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { ImageService } from './image.service';
import { MoviePageComponent } from './movie-page/movie-page.component';
import { MovieCarouselComponent } from './movie-carousel/movie-carousel.component';
import { GenrePageComponent } from './main-page/genre-page/genre-page.component';
import { GeneralPageComponent } from './main-page/general-page/general-page.component';
import { FooterComponent } from './footer/footer.component';

const appRoutes: Routes = [
  { 
    path: "", 
    component: MainPageComponent,
    children: [
      { path: "", component: GeneralPageComponent },
      { path: "genre", component: GenrePageComponent }
    ] 
  },
  { path: "movie", component: MoviePageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationMenuComponent,
    MainPageComponent,
    HeaderComponent,
    MovieCardComponent,
    MoviePageComponent,
    MovieCarouselComponent,
    GenrePageComponent,
    GeneralPageComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
