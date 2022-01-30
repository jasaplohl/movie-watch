import { Component, Input, OnInit } from '@angular/core';
import { ImageService } from '../../../image.service';
import { faStar, faFlag } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search-page-show',
  templateUrl: './search-page-show.component.html',
  styleUrls: ['./search-page-show.component.scss']
})
export class SearchPageShowComponent implements OnInit {
  @Input() declare show: any;
  
  faStarIcon = faStar;
  faFlagIcon = faFlag;

  constructor(public service: ImageService) { }

  ngOnInit(): void {
  }

}
