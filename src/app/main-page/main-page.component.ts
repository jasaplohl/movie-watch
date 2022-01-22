import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ImageService } from '../image.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor(public service: ImageService, private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  genres: any;

  ngOnInit(): void {
    this.fetchAvailableGenres();
  }

  onGenreClick(genre: any) {
    this.router.navigate(["/genre", { 
      id: genre.id,
      name: genre.name
    }]);
  }

  fetchAvailableGenres() {
    const urlParams = new URLSearchParams({
      api_key: environment.API_KEY
    });
    const url = environment.API_URL + "/genre/movie/list?" + urlParams;

    fetch(url)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        this.genres = response.genres;
      })
      .catch(error => {
        console.log(error);
      });
  }

}
