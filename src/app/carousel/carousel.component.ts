import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() declare title: String;
  @Input() declare url: String;
  @Input() declare movies: any;
  @Input() declare shows: any;
  @Input() declare people: any;

  @ViewChild("list") list!: ElementRef;

  faLeft = faChevronLeft;
  faRight = faChevronRight;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  scrollLeft(): void {
    this.list.nativeElement.scrollLeft -= 500;
  }

  scrollRight(): void {
    this.list.nativeElement.scrollLeft += 500;
  }

  onTitleClick(): void {
    if(this.url) {
      this.router.navigate([this.url]);
    }
  }

}
