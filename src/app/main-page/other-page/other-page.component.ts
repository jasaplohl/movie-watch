import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-other-page',
  templateUrl: './other-page.component.html',
  styleUrls: ['./other-page.component.scss']
})
export class OtherPageComponent implements OnInit {

  error_message!: string;

  title: string;
  current_page: number;
  total_pages: number;

  movies: any;

  constructor(private route: ActivatedRoute) {
    this.title = 'popular';
    this.current_page = 1;
    this.total_pages = 1;
  }

  ngOnInit(): void {
    this.route.params.subscribe(routeParams => {
      if(routeParams.type) {
        this.title = routeParams.type;
      }

      this.fetchMovies();

      window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth' 
      });
    });
  }

  fetchMovies(): void {
    const urlParams = new URLSearchParams({
      api_key: environment.API_KEY,
      page: this.current_page.toString()
    });
    const url = environment.API_URL + "/movie/" + this.title + "?" + urlParams;

    fetch(url)
      .then(response => response.json())
      .then(response => {
        if(response.status_message) {
          this.error_message = response.status_message;
        } else {
          this.movies = response.results;
          this.total_pages = response.total_pages;
        }
      })
      .catch(error => {
        console.error(error);
      });

    window.scroll({
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }

  onPageChange(newPage: number): void {
    this.current_page = newPage;
    this.fetchMovies();
  }

}
