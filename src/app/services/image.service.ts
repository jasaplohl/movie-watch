import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ImageService {

  constructor() { }

  getMoviePosterPathUrl(movie: any): String {
    if(movie.poster_path) {
      const url = environment.IMG_URL + "/" + environment.IMG_SIZE + "/" + movie.poster_path;
      return url;
    } else {
      return environment.DEFAULT_IMAGE;
    }
  }

  getMovieBackdropPathUrl(movie: any): String {
    if(movie.backdrop_path) {
      const url = environment.IMG_URL + "/" + environment.IMG_SIZE_LG + "/" + movie.backdrop_path;
      return url;
    } else {
      return environment.DEFAULT_IMAGE;
    }
  }

  getActorProfilePathUrl(profile_path: String): String {
    if(profile_path) {
      const url = environment.IMG_URL + "/" + environment.IMG_SIZE + "/" + profile_path;
      return url;
    } else {
      return environment.DEFAULT_AVATAR;
    }
  }

  getImageUrl(path: String): String {
    if(path) {
      const url = environment.IMG_URL + "/" + environment.IMG_SIZE + "/" + path;
      return url;
    } else {
      return environment.DEFAULT_IMAGE;
    }
  }

}
