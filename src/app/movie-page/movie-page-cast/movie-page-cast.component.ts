import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie-page-cast',
  templateUrl: './movie-page-cast.component.html',
  styleUrls: ['./movie-page-cast.component.scss']
})
export class MoviePageCastComponent implements OnInit {
  @Input() declare movieId: Number;

  cast: any;
  crew: any;

  constructor() {}

  ngOnInit(): void {
    this.fetchCastAndCrewMembers();
  }

  fetchCastAndCrewMembers() {
    const urlParams = new URLSearchParams({
      api_key: environment.API_KEY
    });
    const url = environment.API_URL + "/movie/" + this.movieId + "/credits?" + urlParams;

    fetch(url)
      .then(response => response.json())
      .then(response => {
        this.cast = response.cast;
        this.crew = response.crew;
      })
      .catch(error => {
        console.error(error);
      });
  }

}
