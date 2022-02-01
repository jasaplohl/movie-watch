import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.scss']
})
export class SeasonsComponent implements OnInit {
  @Input() declare showID: Number;
  @Input() declare seasons: any[];

  chosen_season: any;

  constructor() { }

  ngOnInit(): void {
    this.fetchSeasonDetails(this.seasons[0]);
  }

  fetchSeasonDetails(season: any) {
    const urlParams = new URLSearchParams({
      api_key: environment.API_KEY
    });
    const url = environment.API_URL + "/tv/" + this.showID + "/season/" + season.season_number + "?" + urlParams;

    fetch(url)
      .then(response => response.json())
      .then(response => {
        this.chosen_season = response;
      })
      .catch(error => {
        console.error(error);
      });
  }

}
