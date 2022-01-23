import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie-page-recommended',
  templateUrl: './movie-page-recommended.component.html',
  styleUrls: ['./movie-page-recommended.component.scss']
})
export class MoviePageRecommendedComponent implements OnInit {

  movies: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(routeParams => {
      this.getRecommendedMovies(routeParams.id);
    });

    const movieId = this.route.snapshot.paramMap.get("id") ? Number(this.route.snapshot.paramMap.get("id")) : -1;
    this.getRecommendedMovies(movieId);
  }

  getRecommendedMovies(movieId: Number) {
    const urlParams = new URLSearchParams({
      api_key: environment.API_KEY
    });
    const url = environment.API_URL + "/movie/" + movieId + "/recommendations?" + urlParams;

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
