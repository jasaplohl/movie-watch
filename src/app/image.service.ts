import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ImageService {

  constructor() { }

  getMoviePosterPathUrl(movie: any): String {
    const url = environment.IMG_URL + "/" + environment.IMG_SIZE + "/" + movie.poster_path;
    return url;
  }

  getMovieBackdropPathUrl(movie: any): String {
    const url = environment.IMG_URL + "/" + environment.IMG_SIZE + "/" + movie.poster_path;
    return url;
  }

  getActorProfilePathUrl(actor: any): String {
    if(actor.profile_path) {
      const url = environment.IMG_URL + "/" + environment.IMG_SIZE + "/" + actor.profile_path;
      return url;
    } else {
      return "https://ischool.illinois.edu/sites/default/files/styles/normal_square/public/images/empty-avatar-01_1.jpg?itok=hAW4etvU";
    }
  }
}
