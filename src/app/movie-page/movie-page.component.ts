import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(public service: ImageService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const movieId = this.route.snapshot.paramMap.get("id") ? Number(this.route.snapshot.paramMap.get("id")) : -1;
    this.getMovieById(movieId);
  }

  onGenreClick(genre: any) {
    this.router.navigate(["/genre", { 
      id: genre.id,
      name: genre.name
    }]);
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

  getVideoURL(video: any): string {
    const url = `https://www.youtube.com/embed/${video.key}`;
    return url;
  }

  getTrailerURL(): string {
    for(let video of this.movie.videos.results) {
      if(video.type === "Trailer") {
        return this.getVideoURL(video);
      }
    };
    return this.getVideoURL(this.movie.videos.results[0]);
  }

  getMovieDuration() {
    const hours = Math.floor(this.movie.runtime / 60);
    const minutes = this.movie.runtime % 60;

    const hoursStr = (hours > 0) ? hours + " h " : "";
    return hoursStr + minutes + " min";
  }

  getDirector() {
    for(let person of this.movie.credits.crew) {
      if(person.job === "Director") {
        return person.name;
      }
    }
    return "Unknown";
  }

  getWriter() {
    for(let person of this.movie.credits.crew) {
      if(person.job === "Writer") {
        return person.name;
      }
    }
    return "Unknown";
  }

  getActors() {
    let i = 0;
    let actors = "";
    for(let person of this.movie.credits.cast) {
      actors += person.name;
      actors += person.character ? (" (" + person.character + "), ") : (", ");
      i++;
      if(i>=3) {
        break;
      }
    }
    return actors.substring(0, actors.length - 2);
  }

  getRecommendedMovies() {

  }

  getSimilarMovies() {

  }

  getMovieReviews() {

  }

}
