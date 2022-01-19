import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'movie-watch';
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

  fetchMoviesByGenre(genreId: Number) {
    const urlParams = new URLSearchParams({
      api_key: environment.API_KEY,
      with_genres: genreId.toString()
    });
    const url = environment.API_URL + "/discover/movie?" + urlParams;

    fetch(url)
      .then(response => response.json())
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }

  onClickTest(event: MouseEvent) {
    console.log(event);
  }

  constructor() {
    this.genres = [];
    this.fetchAvailableGenres();
    this.fetchMoviesByGenre(27);
  }
}
