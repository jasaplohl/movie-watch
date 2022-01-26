import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie-page-reviews',
  templateUrl: './movie-page-reviews.component.html',
  styleUrls: ['./movie-page-reviews.component.scss']
})
export class MoviePageReviewsComponent implements OnInit {
  @Input() declare movieId: Number;

  page: number;
  total_pages: number;
  reviews: any;

  constructor() {
    this.page = 1;
    this.total_pages = 1;
    this.reviews = [];
  }

  ngOnInit(): void {
    this.fetchMovieReviews();
  }

  fetchMovieReviews() {
    const urlParams = new URLSearchParams({
      api_key: environment.API_KEY,
      page: this.page.toString()
    });
    const url = environment.API_URL + "/movie/" + this.movieId + "/reviews?" + urlParams;

    fetch(url)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        this.reviews = this.reviews.concat(response.results);
        this.total_pages = response.total_pages;
      })
      .catch(error => {
        console.error(error);
      });
  }

  showMoreReviews() {
    this.page += 1;
    this.fetchMovieReviews();
  }

  displayShowMoreButton() {
    const display = this.total_pages > this.page;
    return display;
  }

}
