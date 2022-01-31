import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-genre-page',
  templateUrl: './genre-page.component.html',
  styleUrls: ['./genre-page.component.scss']
})
export class GenrePageComponent implements OnInit {
  current_page: number;
  total_pages: number;
  total_results: number;

  genreId!: number;
  genreName!: String;
  movies: any;
  noResults: boolean;

  sortByForm: FormGroup;
  sortByValue: string;

  selectSortByOptions = [
    { key: "popularity.asc", value: "Popularity Asc." },
    { key: "popularity.desc", value: "Popularity Desc." },

    { key: "release_date.asc", value: "Release Date Asc." },
    { key: "release_date.desc", value: "Release Date Desc." },

    { key: "original_title.asc", value: "Alphabetically Asc." },
    { key: "original_title.desc", value: "Alphabetically Desc." },

    { key: "vote_average.asc", value: "Vote Average Asc." },
    { key: "vote_average.desc", value: "Vote Average Desc." },

    { key: "vote_count.asc", value: "Vote Count Asc." },
    { key: "vote_count.desc", value: "Vote Count Desc." }
  ];

  constructor(private route: ActivatedRoute) {
    this.noResults = false;
    this.current_page = 1;
    this.total_pages = 1;
    this.total_results = 1;

    this.sortByForm = new FormGroup({
      sortBySelect: new FormControl(this.selectSortByOptions[1].key)
    });
    this.sortByValue = this.sortByForm.value.sortBySelect;
  }

  ngOnInit(): void {
    this.genreId = this.route.snapshot.paramMap.get("id") ? Number(this.route.snapshot.paramMap.get("id")) : -1;
    this.genreName = this.route.snapshot.paramMap.get("name") ? this.route.snapshot.paramMap.get("name")! : undefined!;

    this.fetchMoviesByGenre();
  }

  fetchMoviesByGenre(): void {
    const urlParams = new URLSearchParams({
      api_key: environment.API_KEY,
      with_genres: this.genreId.toString(),
      page: this.current_page.toString(),
      sort_by: this.sortByValue
    });
    const url = environment.API_URL + "/discover/movie?" + urlParams;

    fetch(url)
      .then(response => response.json())
      .then(response => {
        this.total_pages = response.total_pages;
        if(response.total_results == 0) {
          this.noResults = true;
        } else {
          this.movies = response.results;
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
    this.fetchMoviesByGenre();
  }

  onSortBySelect() {
    this.sortByValue = this.sortByForm.value.sortBySelect;
    this.current_page = 1;
    this.fetchMoviesByGenre();
  }

}
