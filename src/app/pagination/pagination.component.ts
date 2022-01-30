import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, OnChanges {
  @Input() declare total_pages: number;
  @Input() declare current_page: number;

  pages: number[];

  constructor() {
    this.pages = [];
  }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.total_pages);
  }

  onPageChange(page: number) {
    this.current_page = page;
    console.log(page);
  }

  displayedPages() {
    let displayedPages: number[] = [];

    if(this.total_pages <= environment.PAGE_NUMBERS_DISPLAYED) {
      for(let i=0; i<this.total_pages; i++) {
        displayedPages.push(i+1);
      }
    } else {
      const page_half = Math.floor(environment.PAGE_NUMBERS_DISPLAYED/2);
      // this.current_page = 3;
      // console.log(Math.abs(this.current_page - (this.current_page - page_half)));
    }
    return displayedPages;
  }

}
