import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie-page-similar',
  templateUrl: './movie-page-similar.component.html',
  styleUrls: ['./movie-page-similar.component.scss']
})
export class MoviePageSimilarComponent implements OnInit {

  movies: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(routeParams => {
      this.getSimilarMovies(routeParams.id);
    });
  }

  getSimilarMovies(movieId: Number) {
    const urlParams = new URLSearchParams({
      api_key: environment.API_KEY
    });
    const url = environment.API_URL + "/movie/" + movieId + "/similar?" + urlParams;

    fetch(url)
      .then(response => response.json())
      .then(response => {
        this.movies = response.results;
      })
      .catch(error => {
        console.error(error);
      });
  }

}
