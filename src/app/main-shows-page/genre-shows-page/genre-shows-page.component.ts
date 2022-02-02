import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-genre-shows-page',
  templateUrl: './genre-shows-page.component.html',
  styleUrls: ['./genre-shows-page.component.scss']
})
export class GenreShowsPageComponent implements OnInit {

  current_page: number;
  total_pages: number;
  total_results: number;

  genreId!: number;
  genreName!: String;

  shows: any;
  noResults: boolean;

  sortByForm: FormGroup;
  sortByValue: string;

  sortByOptions = [
    { key: "popularity.desc", value: "Popularity Desc." },
    { key: "popularity.asc", value: "Popularity Asc." },
    
    { key: "vote_average.desc", value: "Vote Average Desc." },
    { key: "vote_average.asc", value: "Vote Average Asc." },
    
    { key: "first_air_date.desc", value: "First Air Date Desc." },
    { key: "first_air_date.asc", value: "First Air Date Asc." }
  ];

  constructor(private route: ActivatedRoute) {
    this.noResults = false;
    this.current_page = 1;
    this.total_pages = 1;
    this.total_results = 1;

    this.sortByForm = new FormGroup({
      sortBySelect: new FormControl(this.sortByOptions[0].key)
    });
    this.sortByValue = this.sortByForm.value.sortBySelect;
  }

  ngOnInit(): void {
    this.route.params.subscribe(routeParams => {
      this.genreId = routeParams.id;
      this.genreName = routeParams.name;

      this.fetchShowsByGenre();

      window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth' 
      });
    });
  }

  fetchShowsByGenre(): void {
    const urlParams = new URLSearchParams({
      api_key: environment.API_KEY,
      with_genres: this.genreId.toString(),
      page: this.current_page.toString(),
      sort_by: this.sortByValue
    });

    const url = environment.API_URL + "/discover/tv?" + urlParams;

    fetch(url)
      .then(response => response.json())
      .then(response => {
        this.total_pages = response.total_pages;
        if(response.total_results == 0) {
          this.noResults = true;
        } else {
          this.shows = response.results;
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

  onPageChange(page: number): void {
    this.current_page = page;
    this.fetchShowsByGenre();
  }

  onSortBySelect() {
    this.sortByValue = this.sortByForm.value.sortBySelect;
    this.current_page = 1;
    this.fetchShowsByGenre();
  }

}
