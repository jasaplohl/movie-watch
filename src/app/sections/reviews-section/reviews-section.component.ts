import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-reviews-section',
  templateUrl: './reviews-section.component.html',
  styleUrls: ['./reviews-section.component.scss']
})
export class ReviewsSectionComponent implements OnInit {
  @Input() declare movieId: Number;
  @Input() declare showId: Number;

  page: number;
  total_pages: number;
  reviews: any;

  constructor() {
    this.page = 1;
    this.total_pages = 1;
    this.reviews = [];
  }

  ngOnInit(): void {
    this.fetchReviews();
  }

  fetchReviews() {
    const urlParams = new URLSearchParams({
      api_key: environment.API_KEY,
      page: this.page.toString()
    });
    let url = "";
    if(this.movieId) {
      url = environment.API_URL + "/movie/" + this.movieId + "/reviews?" + urlParams;
    } else {
      url = environment.API_URL + "/tv/" + this.showId + "/reviews?" + urlParams;
    }

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
    this.fetchReviews();
  }

  displayShowMoreButton() {
    const display = this.total_pages > this.page;
    return display;
  }

}
