import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-search-page-movies',
  templateUrl: './search-page-movies.component.html',
  styleUrls: ['./search-page-movies.component.scss']
})
export class SearchPageMoviesComponent implements OnInit {

  search_term: string;

  movies: any;
  page: number;
  total_pages: number;
  total_results: number;

  constructor(private route: ActivatedRoute) {
    this.search_term = "";
    this.movies = [];
    this.page = 1;
    this.total_pages = 1;
    this.total_results = 1;
  }

  ngOnInit(): void {
    this.route.params.subscribe(routeParams => {
      this.search_term = routeParams.q;

      if(this.search_term) {
        this.fetchMovies();
      }
    });
  }

  fetchMovies(): void {
    const urlParams = new URLSearchParams({
      api_key: environment.API_KEY,
      query: this.search_term,
      page: this.page.toString()
    });
    const url = environment.API_URL + "/search/movie?" + urlParams;

    fetch(url)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        // this.movies = response.results;
        this.movies = this.movies.concat(response.results);
        this.total_pages = response.total_pages;
        this.total_results = response.total_results;
      })
      .catch(error => {
        console.error(error);
      });
  }

  onNextPageClick(): void {
    this.page++;
    this.fetchMovies();
  }

}
