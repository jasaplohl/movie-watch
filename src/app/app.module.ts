import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { MainPageComponent } from './main-page/main-page.component';
import { HeaderComponent } from './header/header.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { ImageService } from './image.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationMenuComponent,
    MainPageComponent,
    HeaderComponent,
    MovieCardComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
