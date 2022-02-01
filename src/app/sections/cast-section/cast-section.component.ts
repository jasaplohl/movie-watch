import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cast-section',
  templateUrl: './cast-section.component.html',
  styleUrls: ['./cast-section.component.scss']
})
export class CastSectionComponent implements OnInit {
  @Input() declare movieId: Number;
  @Input() declare showId: Number;

  cast: any;
  crew: any;

  constructor() {}

  ngOnInit(): void {
    console.log(this.movieId);
    console.log(this.showId);
    if(this.movieId) {
      this.fetchMovieCastAndCrewMembers();
    } else if(this.showId) {
      this.fetchShowCastAndCrewMembers();
    }
  }

  fetchMovieCastAndCrewMembers() {
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

  fetchShowCastAndCrewMembers() {
    const urlParams = new URLSearchParams({
      api_key: environment.API_KEY
    });
    const url = environment.API_URL + "/tv/" + this.showId + "/credits?" + urlParams;

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
