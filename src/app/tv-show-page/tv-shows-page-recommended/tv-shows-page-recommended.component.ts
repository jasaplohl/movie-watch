import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tv-shows-page-recommended',
  templateUrl: './tv-shows-page-recommended.component.html',
  styleUrls: ['./tv-shows-page-recommended.component.scss']
})
export class TvShowsPageRecommendedComponent implements OnInit {

  @Input() declare showId: Number;

  shows: any;

  constructor() {}

  ngOnInit(): void {
    this.getRecommendedShows(this.showId);
  }

  ngOnChanges(): void {
    this.getRecommendedShows(this.showId);
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
