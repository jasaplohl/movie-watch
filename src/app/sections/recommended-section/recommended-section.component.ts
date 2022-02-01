import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-recommended-section',
  templateUrl: './recommended-section.component.html',
  styleUrls: ['./recommended-section.component.scss']
})
export class RecommendedSectionComponent implements OnInit, OnChanges {
  @Input() declare movieId: Number;
  @Input() declare showId: Number;

  movies: any;
  shows: any;

  constructor() {}

  ngOnInit(): void {
    if(this.movieId) {
      this.getRecommendedMovies(this.movieId);
    } else if(this.showId) {
      this.getRecommendedShows(this.showId);
    }
  }

  ngOnChanges(): void {
    if(this.movieId) {
      this.getRecommendedMovies(this.movieId);
    } else if(this.showId) {
      this.getRecommendedShows(this.showId);
    }
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

  getRecommendedShows(showId: Number) {
    const urlParams = new URLSearchParams({
      api_key: environment.API_KEY
    });
    const url = environment.API_URL + "/tv/" + showId + "/recommendations?" + urlParams;

    fetch(url)
      .then(response => response.json())
      .then(response => {
        this.shows = response.results;
      })
      .catch(error => {
        console.error(error);
      });
  }

}
