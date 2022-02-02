import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-other-shows-page',
  templateUrl: './other-shows-page.component.html',
  styleUrls: ['./other-shows-page.component.scss']
})
export class OtherShowsPageComponent implements OnInit {

  error_message!: string;

  title: string;
  current_page: number;
  total_pages: number;

  shows: any;

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

      this.fetchShows();

      window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth' 
      });
    });
  }

  fetchShows(): void {
    const urlParams = new URLSearchParams({
      api_key: environment.API_KEY,
      page: this.current_page.toString()
    });
    const url = environment.API_URL + "/tv/" + this.title + "?" + urlParams;

    fetch(url)
      .then(response => response.json())
      .then(response => {
        if(response.status_message) {
          this.error_message = response.status_message;
        } else {
          this.shows = response.results;
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
    this.fetchShows();
  }

}
