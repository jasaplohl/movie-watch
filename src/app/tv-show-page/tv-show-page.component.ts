import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageService } from '../services/image.service';
import { environment } from 'src/environments/environment';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tv-show-page',
  templateUrl: './tv-show-page.component.html',
  styleUrls: ['./tv-show-page.component.scss']
})
export class TvShowPageComponent implements OnInit {
  faStarIcon = faStar;
  error_message!: string;

  show: any;
  created_by: any;
  chosenSection: String;

  constructor(public service: ImageService, private route: ActivatedRoute, private router: Router) {
    this.created_by = [];
    this.chosenSection = "";
  }

  ngOnInit(): void {
    this.route.params.subscribe(routeParams => {
      const newMovieId = routeParams.id;

      this.getTVShowById(newMovieId);

      window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth' 
      });
    });
  }

  getTVShowById(showID: number) {
    const urlParams = new URLSearchParams({
      api_key: environment.API_KEY,
      append_to_response: "videos,credits"
    });
    const url = environment.API_URL + "/tv/" + showID + "?" + urlParams;

    fetch(url)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        if(response.status_message) {
          this.error_message = response.status_message;
        } else {
          this.show = response;
          this.getCredits();
        }
      })
      .catch(error => {
        console.error(error);
      });
  }

  onGenreClick(genre: any) {
    this.router.navigate(["/genre", { 
      id: genre.id,
      name: genre.name
    }]);
  }

  getVideoURL(video: any): string {
    const url = `https://www.youtube.com/embed/${video.key}`;
    return url;
  }

  getTrailerURL(): string {
    for(let video of this.show.videos.results) {
      if(video.type === "Trailer") {
        return this.getVideoURL(video);
      }
    };
    return this.getVideoURL(this.show.videos.results[0]);
  }

  getActors() {
    let i = 0;
    let actors = "";
    for(let person of this.show.credits.cast) {
      actors += person.name;
      actors += person.character ? (" (" + person.character + "), ") : (", ");
      i++;
      if(i>=3) {
        break;
      }
    }
    return actors.substring(0, actors.length - 2);
  }

  getCredits() {
    const urlParams = new URLSearchParams({
      api_key: environment.API_KEY
    });

    for(let creator of this.show.created_by) {
      const url = environment.API_URL + "/credit/" + creator.credit_id + "?" + urlParams;
      fetch(url)
        .then(response => response.json())
        .then(response => {
          this.created_by.push({ 
            credit: response.job,
            name: creator.name
          });
        })
        .catch(error => {
          console.error(error);
        });
    }
  }

  showSection(path: String) {
    this.chosenSection = path;
  }

}
