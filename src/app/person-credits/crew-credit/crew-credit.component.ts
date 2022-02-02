import { Component, Input, OnInit } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-crew-credit',
  templateUrl: './crew-credit.component.html',
  styleUrls: ['./crew-credit.component.scss']
})
export class CrewCreditComponent implements OnInit {
  @Input() declare credit: any;

  constructor(public service: ImageService) { }

  ngOnInit(): void {
  }

  getReleaseDate(): any {
    let date = this.credit.release_date ? this.credit.release_date : this.credit.first_air_date;
    return date ? date : false;
  }

}
