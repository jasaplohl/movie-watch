import { Component, OnInit } from '@angular/core';
import { ImageService } from '../services/image.service';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-person-page',
  templateUrl: './person-page.component.html',
  styleUrls: ['./person-page.component.scss']
})
export class PersonPageComponent implements OnInit {
  error_message!: String;

  personId!: number;
  person: any;
  movie_credits: any;
  tv_credits: any;

  constructor(public service: ImageService, private router: Router, private route: ActivatedRoute) {
    console.log(this.personId);
  }

  ngOnInit(): void {
    this.route.params.subscribe(routeParams => {
      this.personId = routeParams.id;
      
      console.log(this.personId);
      this.fetchPersonDetails();
    
      window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth' 
      });
    });
  }

  fetchPersonDetails(): void {
    const urlParams = new URLSearchParams({
      api_key: environment.API_KEY,
      // append_to_response: "images,tagged_images"
    });
    const url = environment.API_URL + "/person/" + this.personId + "?" + urlParams;

    fetch(url)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        if(response.status_message) {
          this.error_message = response.status_message;
        }
        this.person = response;
      })
      .catch(error => {
        console.error(error);
      });
  }
}
