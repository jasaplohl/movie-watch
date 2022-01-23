import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-page-cast',
  templateUrl: './movie-page-cast.component.html',
  styleUrls: ['./movie-page-cast.component.scss']
})
export class MoviePageCastComponent implements OnInit {
  @Input() declare credits: Number;

  constructor() { }

  ngOnInit(): void {
  }

}
