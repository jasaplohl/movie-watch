import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor(public service: ImageService) { }

  genres: any;
  movies: any
  upcomingMovies: any;
  nowPlayingMovies: any;
  popularMovies: any;
  topRatedMovies: any;

  fetchMoviesByGenre(genreId: Number): void {
    const urlParams = new URLSearchParams({
      api_key: environment.API_KEY,
      with_genres: genreId.toString()
    });
    const url = environment.API_URL + "/discover/movie?" + urlParams;

    fetch(url)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        this.movies = response.results;
      })
      .catch(error => {
        console.log(error);
      });
  }

  fetchAvailableGenres() {
    const urlParams = new URLSearchParams({
      api_key: environment.API_KEY
    });
    const url = environment.API_URL + "/genre/movie/list?" + urlParams;

    fetch(url)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        this.genres = response.genres;
      })
      .catch(error => {
        console.log(error);
      });
  }

  fetchUpcommingMovies() {
    const urlParams = new URLSearchParams({
      api_key: environment.API_KEY
    });
    const url = environment.API_URL + "/movie/upcoming?" + urlParams;

    fetch(url)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        this.upcomingMovies = response.results;
      })
      .catch(error => {
        console.log(error);
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
        console.log(response);
        this.nowPlayingMovies = response.results;
      })
      .catch(error => {
        console.log(error);
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
        console.log(response);
        this.popularMovies = response.results;
      })
      .catch(error => {
        console.log(error);
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
        console.log(response);
        this.topRatedMovies = response.results;
      })
      .catch(error => {
        console.log(error);
      });
  }

  ngOnInit(): void {
    // this.fetchMoviesByGenre(878);
    this.fetchAvailableGenres();
    this.fetchUpcommingMovies();
    this.fetchLatestMovies();
    this.fetchPopularMovies();
    this.fetchTopRatedMovies();
  }

}
