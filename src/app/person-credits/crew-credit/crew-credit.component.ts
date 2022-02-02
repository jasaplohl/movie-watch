import { Component, Input, OnInit } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';
import { Router } from '@angular/router';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-crew-credit',
  templateUrl: './crew-credit.component.html',
  styleUrls: ['./crew-credit.component.scss']
})
export class CrewCreditComponent implements OnInit {
  @Input() declare type: String;
  @Input() declare credit: any;

  faStarIcon = faStar;
  
  constructor(public service: ImageService, private router: Router) { }

  ngOnInit(): void {
  }

  getReleaseDate(): any {
    let date = this.credit.release_date ? this.credit.release_date : this.credit.first_air_date;
    return date ? date : false;
  }

  onItemClick(): void {
    if(this.type === "movies") {
      this.router.navigate(["/movie", { id: this.credit.id }]);
    } else {
      this.router.navigate(["/show", { id: this.credit.id }]);
    }
  }

}
