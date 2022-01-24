import { Component, Input, OnInit } from '@angular/core';
import { ImageService } from '../../../image.service';

@Component({
  selector: 'app-cast-member',
  templateUrl: './cast-member.component.html',
  styleUrls: ['./cast-member.component.scss']
})
export class CastMemberComponent implements OnInit {
  @Input() declare profile_path: String;
  @Input() declare name: String;
  @Input() declare job: String;

  constructor(public service: ImageService) { }

  ngOnInit(): void {
  }

}
