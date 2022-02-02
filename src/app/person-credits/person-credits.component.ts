import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-person-credits',
  templateUrl: './person-credits.component.html',
  styleUrls: ['./person-credits.component.scss']
})
export class PersonCreditsComponent implements OnInit {
  @Input() declare personId: any;
  @Input() declare type: String; // Type of credits: Movie or TV show

  credits: any;

  constructor() { }

  ngOnInit(): void {
    if(this.type === "movies") {
      this.fetchPersonMovieCredits();
    } else {
      this.fetchPersonTVDetails();
    }
  }

  fetchPersonMovieCredits(): void {
    const urlParams = new URLSearchParams({
      api_key: environment.API_KEY,
    });
    const url = environment.API_URL + "/person/" + this.personId + "/movie_credits?" + urlParams;

    fetch(url)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        this.credits = response;
      })
      .catch(error => {
        console.error(error);
      });
  }

  fetchPersonTVDetails(): void {
    const urlParams = new URLSearchParams({
      api_key: environment.API_KEY,
    });
    const url = environment.API_URL + "/person/" + this.personId + "/tv_credits?" + urlParams;

    fetch(url)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        this.credits = response;
      })
      .catch(error => {
        console.error(error);
      });
  }

}
