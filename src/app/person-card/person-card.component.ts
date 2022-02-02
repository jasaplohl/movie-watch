import { Component, Input, OnInit } from '@angular/core';
import { ImageService } from '../services/image.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.scss']
})
export class PersonCardComponent implements OnInit {
  @Input() declare person: any;

  constructor(public service: ImageService, private router: Router) { }

  ngOnInit(): void {
  }

  onPersonCardClick() {
    this.router.navigate(["/person", { id: this.person.id }]);
  }

}
