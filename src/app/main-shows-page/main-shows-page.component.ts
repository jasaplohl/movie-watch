import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-main-shows-page',
  templateUrl: './main-shows-page.component.html',
  styleUrls: ['./main-shows-page.component.scss']
})
export class MainShowsPageComponent implements OnInit {

  constructor(private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  genres: any;

  ngOnInit(): void {
    this.fetchAvailableGenres();
  }

  onGenreClick(genre: any) {
    this.router.navigate(["/tv/genre", { 
      id: genre.id,
      name: genre.name
    }]);
  }

  fetchAvailableGenres() {
    const urlParams = new URLSearchParams({
      api_key: environment.API_KEY
    });

    const url = environment.API_URL + "/genre/tv/list?" + urlParams;

    fetch(url)
      .then(response => response.json())
      .then(response => {
        this.genres = response.genres;
      })
      .catch(error => {
        console.error(error);
      });
  }

}
