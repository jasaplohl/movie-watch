import { Component, Input, OnInit } from '@angular/core';
import { ImageService } from '../../../services/image.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cast-member',
  templateUrl: './cast-member.component.html',
  styleUrls: ['./cast-member.component.scss']
})
export class CastMemberComponent implements OnInit {
  @Input() declare profile_path: String;
  @Input() declare name: String;
  @Input() declare job: String;
  @Input() declare person: any;

  constructor(public service: ImageService, private router: Router) { }

  ngOnInit(): void {
    console.log(this.person);
  }

  onPersonClick(): void {
    this.router.navigate(["/person", { id: this.person.id }]);
  }

}
