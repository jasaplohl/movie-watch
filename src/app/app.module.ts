// Angular modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Pipes
import { SafePipe } from './pipes/safe.pipe';
import { YearPipe } from './pipes/year.pipe';

// Services
import { ImageService } from './services/image.service';

// Common
import { AppComponent } from './app.component';
import { NavigationMenuComponent } from './header/navigation-menu/navigation-menu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PaginationComponent } from './pagination/pagination.component';
import { CarouselComponent } from './carousel/carousel.component';

// Main page
import { HomePageComponent } from './home-page/home-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { GeneralPageComponent } from './main-page/general-page/general-page.component';
import { GenrePageComponent } from './main-page/genre-page/genre-page.component';

// Main shows page
import { MainShowsPageComponent } from './main-shows-page/main-shows-page.component';
import { GeneralShowPageComponent } from './main-shows-page/general-show-page/general-show-page.component';
import { GenreShowsPageComponent } from './main-shows-page/genre-shows-page/genre-shows-page.component';

// Main people page
import { MainPeoplePageComponent } from './main-people-page/main-people-page.component';

// Movies
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MoviePageComponent } from './movie-page/movie-page.component';

// TV shows
import { TvShowCardComponent } from './tv-show-card/tv-show-card.component';
import { TvShowPageComponent } from './tv-show-page/tv-show-page.component';
import { SeasonsComponent } from './tv-show-page/seasons/seasons.component';
import { TvShowSeasonCardComponent } from './tv-show-page/seasons/season-card/season-card.component';
import { EpisodesComponent } from './tv-show-page/seasons/episodes/episodes.component';

// People
import { PersonCardComponent } from './person-card/person-card.component';
import { PersonPageComponent } from './person-page/person-page.component';
import { PersonCreditsComponent } from './person-page/person-credits/person-credits.component';
import { CastCreditComponent } from './person-page/person-credits/cast-credit/cast-credit.component';
import { CrewCreditComponent } from './person-page/person-credits/crew-credit/crew-credit.component';

// Page sections
import { RecommendedSectionComponent } from './sections/recommended-section/recommended-section.component';
import { SimilarSectionComponent } from './sections/similar-section/similar-section.component';
import { CastSectionComponent } from './sections/cast-section/cast-section.component';
import { CastMemberComponent } from './sections/cast-section/cast-member/cast-member.component';
import { ReviewsSectionComponent } from './sections/reviews-section/reviews-section.component';
import { ReviewComponent } from './sections/reviews-section/review/review.component';

// Search page
import { SearchPageComponent } from './search-page/search-page.component';
import { SearchPageSeeAllComponent } from './search-page/search-page-see-all/search-page-see-all.component';

const appRoutes: Routes = [
  { path: "", component: HomePageComponent},
  { 
    path: "movies", 
    component: MainPageComponent,
    children: [
      { path: "", component: GeneralPageComponent },
      { path: "genre", component: GenrePageComponent }
    ] 
  },
  {
    path: "tv",
    component: MainShowsPageComponent,
    children: [
      { path: "", component: GeneralShowPageComponent },
      { path: "genre", component: GenreShowsPageComponent }
    ]
  },
  { path: "people", component: MainPeoplePageComponent },
  { path: "person", component: PersonPageComponent },
  { path: "movie", component: MoviePageComponent },
  { path: "show", component: TvShowPageComponent },
  { path: "search", component: SearchPageComponent },
  { path: "search/all", component: SearchPageSeeAllComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationMenuComponent,
    MainPageComponent,
    HeaderComponent,
    MovieCardComponent,
    MoviePageComponent,
    CarouselComponent,
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
    SearchPageSeeAllComponent,
    PaginationComponent,
    TvShowCardComponent,
    TvShowPageComponent,
    TvShowSeasonCardComponent,
    SeasonsComponent,
    EpisodesComponent,
    GeneralShowPageComponent,
    MainShowsPageComponent,
    GenreShowsPageComponent,
    MainPeoplePageComponent,
    PersonCardComponent,
    PersonPageComponent,
    PersonCreditsComponent,
    CastCreditComponent,
    CrewCreditComponent,
    HomePageComponent
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
