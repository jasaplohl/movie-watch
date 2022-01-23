import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-genre-page',
  templateUrl: './genre-page.component.html',
  styleUrls: ['./genre-page.component.scss']
})
export class GenrePageComponent implements OnInit {
  genreName!: String;
  movies: any;
  noResults: boolean;

  constructor(private route: ActivatedRoute) {
    this.noResults = false;
  }

  ngOnInit(): void {
    const genreId = this.route.snapshot.paramMap.get("id") ? Number(this.route.snapshot.paramMap.get("id")) : -1;
    this.genreName = this.route.snapshot.paramMap.get("name") ? this.route.snapshot.paramMap.get("name")! : undefined!;

    this.fetchMoviesByGenre(genreId);
  }

  fetchMoviesByGenre(genreId: Number): void {
    const urlParams = new URLSearchParams({
      api_key: environment.API_KEY,
      with_genres: genreId.toString()
    });
    const url = environment.API_URL + "/discover/movie?" + urlParams;

    fetch(url)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        if(response.total_results == 0) {
          this.noResults = true;
        } else {
          this.movies = response.results;
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

}
