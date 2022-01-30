import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { NavigationMenuComponent } from './header/navigation-menu/navigation-menu.component';
import { MainPageComponent } from './main-page/main-page.component';
import { HeaderComponent } from './header/header.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { ImageService } from './image.service';
import { MoviePageComponent } from './movie-page/movie-page.component';
import { MovieCarouselComponent } from './movie-carousel/movie-carousel.component';
import { GenrePageComponent } from './main-page/genre-page/genre-page.component';
import { GeneralPageComponent } from './main-page/general-page/general-page.component';
import { FooterComponent } from './footer/footer.component';
import { SafePipe } from './safe.pipe';
import { MoviePageRecommendedComponent } from './movie-page/movie-page-recommended/movie-page-recommended.component';
import { MoviePageSimilarComponent } from './movie-page/movie-page-similar/movie-page-similar.component';
import { MoviePageCastComponent } from './movie-page/movie-page-cast/movie-page-cast.component';
import { MoviePageReviewsComponent } from './movie-page/movie-page-reviews/movie-page-reviews.component';
import { CastMemberComponent } from './movie-page/movie-page-cast/cast-member/cast-member.component';
import { ReviewComponent } from './movie-page/movie-page-reviews/review/review.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { YearPipe } from './year.pipe';
import { SearchPageMoviesComponent } from './search-page/search-page-movies/search-page-movies.component';
import { SearchPageShowsComponent } from './search-page/search-page-shows/search-page-shows.component';
import { SearchPagePeopleComponent } from './search-page/search-page-people/search-page-people.component';
import { SearchPageMovieComponent } from './search-page/search-page-movies/search-page-movie/search-page-movie.component';
import { SearchPageShowComponent } from './search-page/search-page-shows/search-page-show/search-page-show.component';
import { SearchPagePersonComponent } from './search-page/search-page-people/search-page-person/search-page-person.component';

const appRoutes: Routes = [
  { 
    path: "", 
    component: MainPageComponent,
    children: [
      { path: "", component: GeneralPageComponent },
      { path: "genre", component: GenrePageComponent }
    ] 
  },
  { path: "movie", component: MoviePageComponent },
  { path: "search", component: SearchPageComponent }
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
    FooterComponent,
    SafePipe,
    MoviePageRecommendedComponent,
    MoviePageSimilarComponent,
    MoviePageCastComponent,
    MoviePageReviewsComponent,
    CastMemberComponent,
    ReviewComponent,
    SearchPageComponent,
    YearPipe,
    SearchPageMoviesComponent,
    SearchPageShowsComponent,
    SearchPagePeopleComponent,
    SearchPageMovieComponent,
    SearchPageShowComponent,
    SearchPagePersonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
