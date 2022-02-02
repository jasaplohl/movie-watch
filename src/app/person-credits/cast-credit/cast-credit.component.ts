import { Component, Input, OnInit } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-cast-credit',
  templateUrl: './cast-credit.component.html',
  styleUrls: ['./cast-credit.component.scss']
})
export class CastCreditComponent implements OnInit {
  @Input() declare credit: any;

  constructor(public service: ImageService) { }

  ngOnInit(): void {
  }

  getReleaseDate(): any {
    let date = this.credit.release_date ? this.credit.release_date : this.credit.first_air_date;
    return date ? date : false;
  }

}
