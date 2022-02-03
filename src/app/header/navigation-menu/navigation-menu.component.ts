import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { faTimes, faFilm, faTv, faUserFriends, faHome } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss']
})
export class NavigationMenuComponent implements OnInit {
  @Input() declare menuOpen: boolean;
  @Output() onMenuClose = new EventEmitter<void>();

  faTimesIcon = faTimes;
  faHomeIcon = faHome;
  faFilmIcon = faFilm;
  faTvIcon = faTv;
  faUserFriendsIcon = faUserFriends;

  movieGenres: any;
  tvGenres: any;

  closeMenu() {
    this.onMenuClose.emit();
  }

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.fetchAvailableMovieGenres();
    this.fetchAvailableTVGenres();
  }

  fetchAvailableMovieGenres() {
    const urlParams = new URLSearchParams({
      api_key: environment.API_KEY
    });

    const url = environment.API_URL + "/genre/movie/list?" + urlParams;

    fetch(url)
      .then(response => response.json())
      .then(response => {
        this.movieGenres = response.genres;
      })
      .catch(error => {
        console.error(error);
      });
  }

  fetchAvailableTVGenres() {
    const urlParams = new URLSearchParams({
      api_key: environment.API_KEY
    });

    const url = environment.API_URL + "/genre/tv/list?" + urlParams;

    fetch(url)
      .then(response => response.json())
      .then(response => {
        this.tvGenres = response.genres;
      })
      .catch(error => {
        console.error(error);
      });
  }

}
