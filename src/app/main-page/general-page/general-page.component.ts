import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-general-page',
  templateUrl: './general-page.component.html',
  styleUrls: ['./general-page.component.scss']
})
export class GeneralPageComponent implements OnInit {
  
  upcomingMovies: any;
  nowPlayingMovies: any;
  popularMovies: any;
  topRatedMovies: any;

  constructor() { }

  ngOnInit(): void {
    this.fetchUpcommingMovies();
    this.fetchLatestMovies();
    this.fetchPopularMovies();
    this.fetchTopRatedMovies();
  }

  fetchUpcommingMovies() {
    const urlParams = new URLSearchParams({
      api_key: environment.API_KEY
    });
    const url = environment.API_URL + "/movie/upcoming?" + urlParams;

    fetch(url)
      .then(response => response.json())
      .then(response => {
        this.upcomingMovies = response.results;
      })
      .catch(error => {
        console.error(error);
      });
  }

  fetchLatestMovies() {
    const urlParams = new URLSearchParams({
      api_key: environment.API_KEY
    });
    const url = environment.API_URL + "/movie/now_playing?" + urlParams;

    fetch(url)
      .then(response => response.json())
      .then(response => {
        this.nowPlayingMovies = response.results;
      })
      .catch(error => {
        console.error(error);
      });
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

  fetchTopRatedMovies() {
    const urlParams = new URLSearchParams({
      api_key: environment.API_KEY
    });
    const url = environment.API_URL + "/movie/top_rated?" + urlParams;

    fetch(url)
      .then(response => response.json())
      .then(response => {
        this.topRatedMovies = response.results;
      })
      .catch(error => {
        console.error(error);
      });
  }

}
