import { Component, Input, OnInit } from '@angular/core';
import { ImageService } from '../../../services/image.service';

@Component({
  selector: 'app-season-card',
  templateUrl: './season-card.component.html',
  styleUrls: ['./season-card.component.scss']
})
export class TvShowSeasonCardComponent implements OnInit {
  @Input() declare isChosen: boolean;
  @Input() declare season: any;

  constructor(public service: ImageService) { }

  ngOnInit(): void {
  }

}
