import { Component, Input, OnInit } from '@angular/core';
import { ImageService } from '../image.service';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  @Input() declare movie: any;

  faStarIcon: any;

  constructor(public service: ImageService, private router: Router) {
    this.faStarIcon = faStar;
  }

  onMovieCardClick() {
    this.router.navigate(["/movie", { id: this.movie.id }]);
  }

  ngOnInit(): void {
  }

}
