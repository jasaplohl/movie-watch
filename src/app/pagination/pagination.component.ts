import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() declare total_pages: number;
  @Input() declare current_page: number;
  @Output() pageChange = new EventEmitter<number>();

  pages: number[];
  
  faLeftIcon = faChevronLeft;
  faRightIcon = faChevronRight;

  constructor() {
    this.pages = [];
  }

  ngOnInit(): void {
  }

  pageDecrease() {
    this.current_page--;
    this.pageChange.emit(this.current_page);
  }

  pageIncrease() {
    this.current_page++;
    this.pageChange.emit(this.current_page);
  }

}
