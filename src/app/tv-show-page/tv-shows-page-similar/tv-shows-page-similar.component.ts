import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tv-shows-page-similar',
  templateUrl: './tv-shows-page-similar.component.html',
  styleUrls: ['./tv-shows-page-similar.component.scss']
})
export class TvShowsPageSimilarComponent implements OnInit {

  @Input() declare showId: Number;

  shows: any;

  constructor() {}

  ngOnInit(): void {
    this.getSimilarShows(this.showId);
  }

  ngOnChanges(): void {
    this.getSimilarShows(this.showId);
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
