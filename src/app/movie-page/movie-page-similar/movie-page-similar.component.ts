import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie-page-similar',
  templateUrl: './movie-page-similar.component.html',
  styleUrls: ['./movie-page-similar.component.scss']
})
export class MoviePageSimilarComponent implements OnInit, OnChanges {
  @Input() declare movieId: Number;

  movies: any;

  constructor() {}

  ngOnInit(): void {
    this.getSimilarMovies(this.movieId);
  }

  ngOnChanges(): void {
    this.getSimilarMovies(this.movieId);
  }

  getSimilarMovies(movieId: Number) {
    const urlParams = new URLSearchParams({
      api_key: environment.API_KEY
    });
    const url = environment.API_URL + "/movie/" + movieId + "/similar?" + urlParams;

    fetch(url)
      .then(response => response.json())
      .then(response => {
        this.movies = response.results;
      })
      .catch(error => {
        console.error(error);
      });
  }

}
