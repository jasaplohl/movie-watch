import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-similar-section',
  templateUrl: './similar-section.component.html',
  styleUrls: ['./similar-section.component.scss']
})
export class SimilarSectionComponent implements OnInit, OnChanges {
  @Input() declare movieId: Number;
  @Input() declare showId: Number;

  movies: any;
  shows: any;

  constructor() {}

  ngOnInit(): void {
    if(this.movieId) {
      this.getSimilarMovies(this.movieId);
    } else if(this.showId) {
      this.getSimilarShows(this.showId);
    }
  }

  ngOnChanges(): void {
    if(this.movieId) {
      this.getSimilarMovies(this.movieId);
    } else if(this.showId) {
      this.getSimilarShows(this.showId);
    }
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

  getSimilarShows(showId: Number) {
    const urlParams = new URLSearchParams({
      api_key: environment.API_KEY
    });
    const url = environment.API_URL + "/tv/" + showId + "/similar?" + urlParams;

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
