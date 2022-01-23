import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ImageService } from '../image.service';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.scss']
})
export class MoviePageComponent implements OnInit {

  movie: any;
  error_message!: String;
  faStarIcon = faStar;

  constructor(public service: ImageService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const movieId = this.route.snapshot.paramMap.get("id") ? Number(this.route.snapshot.paramMap.get("id")) : -1;
    this.getMovieById(movieId);
  }

  getMovieById(movieId: Number) {
    const urlParams = new URLSearchParams({
      api_key: environment.API_KEY,
      append_to_response: "videos,images,credits,keywords"
    });
    const url = environment.API_URL + "/movie/" + movieId + "?" + urlParams;

    fetch(url)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        if(response.status_message) {
          this.error_message = response.status_message;
        } else {
          this.movie = response;
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  getVideoURL(video: any) {
    const url = `https://www.youtube.com/embed/${video.key}`;
    return url;
  }

  getRecommendedMovies() {

  }

  getSimilarMovies() {

  }

  getMovieReviews() {

  }

}
