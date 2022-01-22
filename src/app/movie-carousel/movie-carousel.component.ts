import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-movie-carousel',
  templateUrl: './movie-carousel.component.html',
  styleUrls: ['./movie-carousel.component.scss']
})
export class MovieCarouselComponent implements OnInit {
  @Input() declare title: String;
  @Input() declare movies: any;

  @ViewChild("list") list!: ElementRef;

  faLeft = faChevronLeft;
  faRight = faChevronRight;

  constructor() { }

  ngOnInit(): void {
  }

  scrollLeft() {
    this.list.nativeElement.scrollLeft -= 500;
  }

  scrollRight() {
    this.list.nativeElement.scrollLeft += 500;
  }

}
