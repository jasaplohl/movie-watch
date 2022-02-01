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
    this.fetchCastAndCrewMembers();
  }

  fetchCastAndCrewMembers() {
    const urlParams = new URLSearchParams({
      api_key: environment.API_KEY
    });

    let url = "";
    if(this.movieId) {
      url = environment.API_URL + "/movie/" + this.movieId + "/credits?" + urlParams;
    } else {
      url = environment.API_URL + "/tv/" + this.showId + "/credits?" + urlParams;
    }

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
