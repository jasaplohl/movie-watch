import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-general-show-page',
  templateUrl: './general-show-page.component.html',
  styleUrls: ['./general-show-page.component.scss']
})
export class GeneralShowPageComponent implements OnInit {

  popular: any;
  top_rated: any;
  airing_today: any;
  on_the_air: any;

  constructor() { }

  ngOnInit(): void {
    this.fetchPopular();
    this.fetchTopRated();
    this.fetchAiringToday();
    this.fetchOnTheAir();
  }

  fetchPopular(): void {
    const urlParams = new URLSearchParams({
      api_key: environment.API_KEY
    });
    const url = environment.API_URL + "/tv/popular?" + urlParams;

    fetch(url)
      .then(response => response.json())
      .then(response => {
        this.popular = response.results;
      })
      .catch(error => {
        console.error(error);
      });
  }

  fetchTopRated(): void {
    const urlParams = new URLSearchParams({
      api_key: environment.API_KEY
    });
    const url = environment.API_URL + "/tv/top_rated?" + urlParams;

    fetch(url)
      .then(response => response.json())
      .then(response => {
        this.top_rated = response.results;
      })
      .catch(error => {
        console.error(error);
      });
  }

  fetchAiringToday(): void {
    const urlParams = new URLSearchParams({
      api_key: environment.API_KEY
    });
    const url = environment.API_URL + "/tv/airing_today?" + urlParams;

    fetch(url)
      .then(response => response.json())
      .then(response => {
        this.airing_today = response.results;
      })
      .catch(error => {
        console.error(error);
      });
  }

  fetchOnTheAir(): void {
    const urlParams = new URLSearchParams({
      api_key: environment.API_KEY
    });
    const url = environment.API_URL + "/tv/on_the_air?" + urlParams;

    fetch(url)
      .then(response => response.json())
      .then(response => {
        this.on_the_air = response.results;
      })
      .catch(error => {
        console.error(error);
      });
  }

}
