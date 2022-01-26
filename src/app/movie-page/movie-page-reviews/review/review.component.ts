import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  @Input() declare review: any;

  constructor() { }

  ngOnInit(): void {
  }

  getAuthorAvatarURL(): String {
    const avatar_path = this.review.author_details.avatar_path;
    if(avatar_path) {
      return avatar_path.substring(1);
    } else {
      return "";
    }
  }

}
