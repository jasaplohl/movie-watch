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
    const url = environment.IMG_URL + "/" + environment.IMG_SIZE_LG + "/" + movie.backdrop_path;
    return url;
  }

  getActorProfilePathUrl(profile_path: String): String {
    if(profile_path) {
      const url = environment.IMG_URL + "/" + environment.IMG_SIZE + "/" + profile_path;
      return url;
    } else {
      return environment.DEFAULT_AVATAR;
    }
  }

  getImageUrl(path: String) {
    const url = environment.IMG_URL + "/" + environment.IMG_SIZE + "/" + path;
    return url;
  }

}
