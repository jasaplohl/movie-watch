import { Component, EventEmitter, Input, Output } from '@angular/core';
import { environment } from 'src/environments/environment';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss']
})
export class NavigationMenuComponent {
  @Input() declare menuOpen: boolean;
  @Output() onMenuClose = new EventEmitter<void>();

  faTimesIcon = faTimes;
  genres: { "id": Number, "name": String }[];

  fetchAvailableGenres() {
    const urlParams = new URLSearchParams({
      api_key: environment.API_KEY
    });
    const url = environment.API_URL + "/genre/movie/list?" + urlParams;

    fetch(url)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        this.genres = response.genres;
      })
      .catch(error => {
        console.log(error);
      });
  }

  onClickTest(genre: any) {
    console.log(genre);
  }

  closeMenu() {
    this.onMenuClose.emit();
  }

  constructor() {
    this.genres = [];
    this.fetchAvailableGenres();
  }

}
