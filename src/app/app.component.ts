import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'movie-watch';

  apiCallTest() {
    console.log(environment.API_URL);
  }

  constructor() {
    this.apiCallTest();
  }
}
