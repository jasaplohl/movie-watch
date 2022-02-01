import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie-page-recommended',
  templateUrl: './movie-page-recommended.component.html',
  styleUrls: ['./movie-page-recommended.component.scss']
})
export class MoviePageRecommendedComponent implements OnInit, OnChanges {
  @Input() declare movieId: Number;

  movies: any;

  constructor() {}

  ngOnInit(): void {
    this.getRecommendedMovies(this.movieId);
  }

  ngOnChanges(): void {
    this.getRecommendedMovies(this.movieId);
  }

  getRecommendedMovies(movieId: Number) {
    const urlParams = new URLSearchParams({
      api_key: environment.API_KEY
    });
    const url = environment.API_URL + "/movie/" + movieId + "/recommendations?" + urlParams;

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
