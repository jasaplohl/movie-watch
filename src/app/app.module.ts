import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SafePipe } from './pipes/safe.pipe';
import { YearPipe } from './pipes/year.pipe';

import { ImageService } from './services/image.service';

import { AppComponent } from './app.component';

import { NavigationMenuComponent } from './header/navigation-menu/navigation-menu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PaginationComponent } from './pagination/pagination.component';

import { MainPageComponent } from './main-page/main-page.component';
import { GenrePageComponent } from './main-page/genre-page/genre-page.component';
import { GeneralPageComponent } from './main-page/general-page/general-page.component';
import { GeneralShowPageComponent } from './main-page/general-show-page/general-show-page.component';

import { MovieCardComponent } from './movie-card/movie-card.component';
import { MovieCarouselComponent } from './movie-carousel/movie-carousel.component';
import { MoviePageComponent } from './movie-page/movie-page.component';

import { RecommendedSectionComponent } from './sections/recommended-section/recommended-section.component';
import { SimilarSectionComponent } from './sections/similar-section/similar-section.component';
import { CastSectionComponent } from './sections/cast-section/cast-section.component';
import { CastMemberComponent } from './sections/cast-section/cast-member/cast-member.component';
import { ReviewsSectionComponent } from './sections/reviews-section/reviews-section.component';
import { ReviewComponent } from './sections/reviews-section/review/review.component';

import { SearchPageComponent } from './search-page/search-page.component';
import { SearchPageMoviesComponent } from './search-page/search-page-movies/search-page-movies.component';
import { SearchPageShowsComponent } from './search-page/search-page-shows/search-page-shows.component';
import { SearchPagePeopleComponent } from './search-page/search-page-people/search-page-people.component';
import { SearchPagePersonComponent } from './search-page/search-page-people/search-page-person/search-page-person.component';

import { TvShowCardComponent } from './tv-show-card/tv-show-card.component';
import { TvShowPageComponent } from './tv-show-page/tv-show-page.component';
import { SeasonsComponent } from './tv-show-page/seasons/seasons.component';
import { TvShowSeasonCardComponent } from './tv-show-page/seasons/season-card/season-card.component';
import { EpisodesComponent } from './tv-show-page/seasons/episodes/episodes.component';

const appRoutes: Routes = [
  { 
    path: "", 
    component: MainPageComponent,
    children: [
      { path: "", component: GeneralPageComponent },
      { path: "tv", component: GeneralShowPageComponent },
      { path: "genre", component: GenrePageComponent }
    ] 
  },
  { path: "movie", component: MoviePageComponent },
  { path: "show", component: TvShowPageComponent },
  { path: "search", component: SearchPageComponent },
  { path: "search/movies", component: SearchPageMoviesComponent }
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
    RecommendedSectionComponent,
    SimilarSectionComponent,
    CastSectionComponent,
    ReviewsSectionComponent,
    CastMemberComponent,
    ReviewComponent,
    SearchPageComponent,
    YearPipe,
    SearchPageMoviesComponent,
    SearchPageShowsComponent,
    SearchPagePeopleComponent,
    SearchPagePersonComponent,
    PaginationComponent,
    TvShowCardComponent,
    TvShowPageComponent,
    TvShowSeasonCardComponent,
    SeasonsComponent,
    EpisodesComponent,
    GeneralShowPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
