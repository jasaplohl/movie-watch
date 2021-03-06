import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-search-page-see-all',
  templateUrl: './search-page-see-all.component.html',
  styleUrls: ['./search-page-see-all.component.scss']
})
export class SearchPageSeeAllComponent implements OnInit {

  type: string;
  search_term: string;

  data: any; // Movies, TV shows or People
  page: number;
  total_pages: number;
  total_results: number;

  constructor(private route: ActivatedRoute) {
    this.search_term = "";
    this.type = "movie";
    this.data = [];
    this.page = 1;
    this.total_pages = 1;
    this.total_results = 1;
  }

  ngOnInit(): void {
    this.route.params.subscribe(routeParams => {
      this.search_term = routeParams.q;
      this.type = routeParams.type ? routeParams.type : "movie";

      if(this.search_term) {
        this.fetchData();
      }
    });
  }

  fetchData(): void {
    const urlParams = new URLSearchParams({
      api_key: environment.API_KEY,
      query: this.search_term,
      page: this.page.toString()
    });
    const url = environment.API_URL + "/search/" + this.type  + "?" + urlParams;

    fetch(url)
      .then(response => response.json())
      .then(response => {
        this.data = response.results;
        this.total_pages = response.total_pages;
        this.total_results = response.total_results;
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

  onPageChange(page_number: number): void {
    this.page = page_number;
    this.fetchData();
  }

}
