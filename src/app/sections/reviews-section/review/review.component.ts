import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as moment from 'moment';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  @Input() declare review: any;

  constructor(private service: ImageService) { }

  ngOnInit(): void {
  }

  getReviewDate(): String {
    const date = moment(this.review.created_at).fromNow();
    return date;
  }

  getAuthorAvatarURL(): String {
    let url;
    const avatar_path = this.review.author_details.avatar_path;

    if(avatar_path) {
      if(avatar_path.startsWith("/https")) {
        url = avatar_path.substring(1);
      } else {
        url = this.service.getImageUrl(avatar_path);
      }
    } else {
      url = environment.DEFAULT_AVATAR;
    }

    return url;
  }

}
