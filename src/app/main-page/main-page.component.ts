import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor() { }

  movies: any;

  fetchMoviesByGenre(genreId: Number): void {
    const urlParams = new URLSearchParams({
      api_key: environment.API_KEY,
      with_genres: genreId.toString()
    });
    const url = environment.API_URL + "/discover/movie?" + urlParams;

    fetch(url)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        this.movies = response.results;
      })
      .catch(error => {
        console.log(error);
      });
  }

  getMovieImageUrl(movie: any): String {
    const url = environment.IMG_URL + "/" + environment.IMG_SIZE + "/" + movie.poster_path;
    return url;
  }

  ngOnInit(): void {
    this.fetchMoviesByGenre(878);
  }

}
