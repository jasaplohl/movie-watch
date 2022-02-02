import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-main-people-page',
  templateUrl: './main-people-page.component.html',
  styleUrls: ['./main-people-page.component.scss']
})
export class MainPeoplePageComponent implements OnInit {

  people: any;
  current_page: number;
  total_pages: number;

  constructor() {
    this.current_page = 1;
    this.total_pages = 1;
  }

  ngOnInit(): void {
    this.fetchPopularPeople();
  }

  fetchPopularPeople(): void {
    const urlParams = new URLSearchParams({
      api_key: environment.API_KEY,
      page: this.current_page.toString()
    });
    const url = environment.API_URL + "/person/popular?" + urlParams;

    fetch(url)
      .then(response => response.json())
      .then(response => {
        this.people = response.results;
        this.total_pages = response.total_pages;
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
    this.fetchPopularPeople();
  }

}
