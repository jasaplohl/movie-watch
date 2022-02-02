import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-person-credits',
  templateUrl: './person-credits.component.html',
  styleUrls: ['./person-credits.component.scss']
})
export class PersonCreditsComponent implements OnInit {
  @Input() declare personId: any;
  @Input() declare type: String; // Type of credits: Movie or TV show

  readonly items_per_page = 5;
  displayedCastCredits: any;
  displayedCrewCredits: any;

  credits: any;
  current_cast_page: number;
  total_cast_pages: number;
  current_crew_page: number;
  total_crew_pages: number;

  constructor() {
    this.current_cast_page = 1;
    this.total_cast_pages = 1;
    this.current_crew_page = 1;
    this.total_crew_pages = 1;
  }

  ngOnInit(): void {
    if(this.type === "movies") {
      this.fetchPersonMovieCredits();
    } else {
      this.fetchPersonTVDetails();
    }
  }

  initPagination(): void {
    this.total_cast_pages = this.getTotalPages(this.credits.cast);
    this.total_crew_pages = this.getTotalPages(this.credits.crew);
    this.displayedCastCredits = this.getCreditsForCurrentPage(this.credits.cast, this.current_cast_page);
    this.displayedCrewCredits = this.getCreditsForCurrentPage(this.credits.crew, this.current_crew_page);
  }

  /**
   * Divides the given array into pages.
   */
  getTotalPages(credits: any): number {
    return Math.ceil(credits.length / this.items_per_page);
  }

  onCastPageChange(newPage: number, anchor: HTMLElement): void {
    this.current_cast_page = newPage;
    this.displayedCastCredits = this.getCreditsForCurrentPage(this.credits.cast, this.current_cast_page);
    anchor.scrollIntoView({behavior: 'smooth'});
  }

  onCrewPageChange(newPage: number, anchor: HTMLElement): void {
    this.current_crew_page = newPage;
    this.displayedCrewCredits = this.getCreditsForCurrentPage(this.credits.crew, this.current_crew_page);
    anchor.scrollIntoView({behavior: 'smooth'});
  }

  getCreditsForCurrentPage(credits: any, current_page: number): void {
    const lowerLimit = (current_page-1)*this.items_per_page;
    const upperLimit = current_page*this.items_per_page;
    return credits.slice(lowerLimit, upperLimit);
  }

  fetchPersonMovieCredits(): void {
    const urlParams = new URLSearchParams({
      api_key: environment.API_KEY,
    });
    const url = environment.API_URL + "/person/" + this.personId + "/movie_credits?" + urlParams;

    fetch(url)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        this.credits = response;
        this.initPagination();
      })
      .catch(error => {
        console.error(error);
      });
  }

  fetchPersonTVDetails(): void {
    const urlParams = new URLSearchParams({
      api_key: environment.API_KEY,
    });
    const url = environment.API_URL + "/person/" + this.personId + "/tv_credits?" + urlParams;

    fetch(url)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        this.credits = response;
        this.initPagination();
      })
      .catch(error => {
        console.error(error);
      });
  }

}
