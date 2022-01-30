import { Component, Input, OnInit } from '@angular/core';
import { ImageService } from '../../../image.service';
import { faStar, faFlag } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search-page-movie',
  templateUrl: './search-page-movie.component.html',
  styleUrls: ['./search-page-movie.component.scss']
})
export class SearchPageMovieComponent implements OnInit {
  @Input() declare movie: any;

  faStarIcon = faStar;
  faFlagIcon = faFlag;

  constructor(public service: ImageService) { }

  ngOnInit(): void {
  }

}
