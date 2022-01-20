import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss']
})
export class NavigationMenuComponent {

  genres: { "id": Number, "name": String }[];

  fetchAvailableGenres() {
    const urlParams = new URLSearchParams({
      api_key: environment.API_KEY
    });
    const url = environment.API_URL + "/genre/movie/list?" + urlParams;

    fetch(url)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        this.genres = response.genres;
      })
      .catch(error => {
        console.log(error);
      });
  }

  onClickTest(genre: any) {
    console.log(genre);
  }

  constructor() {
    this.genres = [];
    this.fetchAvailableGenres();
  }

}
