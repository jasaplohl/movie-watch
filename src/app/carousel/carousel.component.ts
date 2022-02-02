import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() declare title: String;
  @Input() declare movies: any;
  @Input() declare shows: any;

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
