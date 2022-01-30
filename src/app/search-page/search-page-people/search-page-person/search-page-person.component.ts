import { Component, Input, OnInit } from '@angular/core';
import { ImageService } from '../../../image.service';

@Component({
  selector: 'app-search-page-person',
  templateUrl: './search-page-person.component.html',
  styleUrls: ['./search-page-person.component.scss']
})
export class SearchPagePersonComponent implements OnInit {
  @Input() declare person: any;

  constructor(public service: ImageService) { }

  ngOnInit(): void {
  }

}
