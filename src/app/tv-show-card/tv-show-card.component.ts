import { Component, OnInit, Input } from '@angular/core';
import { ImageService } from '../image.service';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tv-show-card',
  templateUrl: './tv-show-card.component.html',
  styleUrls: ['./tv-show-card.component.scss']
})
export class TvShowCardComponent implements OnInit {
  @Input() declare tvShow: any;

  faStarIcon = faStar;

  constructor(public service: ImageService, private router: Router) { }

  onTVShowCardClick() {
    this.router.navigate(["/show", { id: this.tvShow.id }]);
  }

  ngOnInit(): void {
  }

}
