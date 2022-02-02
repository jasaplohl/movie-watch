import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  popularMovies: any;
  popularShows: any;
  popularPeople: any;

  constructor() { }

  ngOnInit(): void {
    this.fetchPopularMovies();
    this.fetchPopularShows();
    this.fetchPopularPeople();
  }

  fetchPopularMovies() {
    const urlParams = new URLSearchParams({
      api_key: environment.API_KEY
    });
    const url = environment.API_URL + "/movie/popular?" + urlParams;

    fetch(url)
      .then(response => response.json())
      .then(response => {
        this.popularMovies = response.results;
      })
      .catch(error => {
        console.error(error);
      });
  }

  fetchPopularShows() {
    const urlParams = new URLSearchParams({
      api_key: environment.API_KEY
    });
    const url = environment.API_URL + "/tv/popular?" + urlParams;

    fetch(url)
      .then(response => response.json())
      .then(response => {
        this.popularShows = response.results;
      })
      .catch(error => {
        console.error(error);
      });
  }

  fetchPopularPeople() {
    const urlParams = new URLSearchParams({
      api_key: environment.API_KEY
    });
    const url = environment.API_URL + "/person/popular?" + urlParams;

    fetch(url)
      .then(response => response.json())
      .then(response => {
        this.popularPeople = response.results;
      })
      .catch(error => {
        console.error(error);
      });
  }

}
