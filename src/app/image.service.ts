import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ImageService {

  constructor() { }

  getMovieImageUrl(movie: any): String {
    const url = environment.IMG_URL + "/" + environment.IMG_SIZE + "/" + movie.poster_path;
    return url;
  }
}
