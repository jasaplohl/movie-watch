import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie-page-reviews',
  templateUrl: './movie-page-reviews.component.html',
  styleUrls: ['./movie-page-reviews.component.scss']
})
export class MoviePageReviewsComponent implements OnInit {
  @Input() declare movieId: Number;

  reviews: any;

  constructor() { }

  ngOnInit(): void {
    this.fetchMovieReviews(this.movieId);
  }

  fetchMovieReviews(movieId: Number) {
    const urlParams = new URLSearchParams({
      api_key: environment.API_KEY,
      page: "1"
    });
    const url = environment.API_URL + "/movie/" + movieId + "/reviews?" + urlParams;

    fetch(url)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        this.reviews = response.results;
      })
      .catch(error => {
        console.error(error);
      });
  }

}
