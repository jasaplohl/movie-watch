import { Component, Input, OnInit } from '@angular/core';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  @Input() declare movie: any;

  constructor(public service: ImageService) { }

  ngOnInit(): void {
  }

}
