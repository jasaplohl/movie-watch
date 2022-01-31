import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ImageService } from '../image.service';
import { faStar, faFlag, faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  search_term: string;

  movies: any;
  tvShows: any;
  people: any;

  // movieGenres: any;
  
  faStarIcon = faStar;
  faFlagIcon = faFlag;
  faRightIcon = faChevronRight;

  constructor(private route: ActivatedRoute, public service: ImageService) {
    this.search_term = "";
    // this.movieGenres = {};
  }

  ngOnInit(): void {
    this.route.params.subscribe(routeParams => {
      this.search_term = routeParams.q;

      if(this.search_term) {
        this.fetchMovies();
        this.fetchTVShows();
        this.fetchPerson();
      }
    });
    
    // this.fetchMovieGenres();
  }

  fetchMovies() {
    const urlParams = new URLSearchParams({
      api_key: environment.API_KEY,
      query: this.search_term
    });
    const url = environment.API_URL + "/search/movie?" + urlParams;

    fetch(url)
      .then(response => response.json())
      .then(response => {
        this.movies = response;
      })
      .catch(error => {
        console.error(error);
      });
  }

  fetchTVShows() {
    const urlParams = new URLSearchParams({
      api_key: environment.API_KEY,
      query: this.search_term
    });
    const url = environment.API_URL + "/search/tv?" + urlParams;

    fetch(url)
      .then(response => response.json())
      .then(response => {
        console.log("TV shows");
        console.log(response);
        this.tvShows = response;
      })
      .catch(error => {
        console.error(error);
      });
  }

  fetchPerson() {
    const urlParams = new URLSearchParams({
      api_key: environment.API_KEY,
      query: this.search_term
    });
    const url = environment.API_URL + "/search/person?" + urlParams;

    fetch(url)
      .then(response => response.json())
      .then(response => {
        console.log("People");
        console.log(response);
        this.people = response;
      })
      .catch(error => {
        console.error(error);
      });
  }

  // fetchMovieGenres() {
  //   const urlParams = new URLSearchParams({
  //     api_key: environment.API_KEY
  //   });
  //   const url = environment.API_URL + "/genre/movie/list?" + urlParams;

  //   fetch(url)
  //     .then(response => response.json())
  //     .then(response => {
  //       response.genres.map((genre: any) => {
  //         this.movieGenres[genre.id] = genre.name;
  //       });
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // }

}
