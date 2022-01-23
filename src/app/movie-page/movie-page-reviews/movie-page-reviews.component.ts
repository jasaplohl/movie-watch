import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-page-reviews',
  templateUrl: './movie-page-reviews.component.html',
  styleUrls: ['./movie-page-reviews.component.scss']
})
export class MoviePageReviewsComponent implements OnInit {
  @Input() declare movieId: Number;

  constructor() { }

  ngOnInit(): void {
  }

}
