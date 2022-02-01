import { Component, Input, OnInit } from '@angular/core';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-tv-show-season-card',
  templateUrl: './tv-show-season-card.component.html',
  styleUrls: ['./tv-show-season-card.component.scss']
})
export class TvShowSeasonCardComponent implements OnInit {
  @Input() declare season: any;

  constructor(public service: ImageService) { }

  ngOnInit(): void {
  }

}
