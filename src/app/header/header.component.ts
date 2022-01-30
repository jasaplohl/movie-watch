import { Component, OnInit } from '@angular/core';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  searchTerm: String;
  menuOpen: boolean;
  faBarsIcon = faBars;
  faSearchIcon = faSearch;

  constructor(private router: Router) {
    this.menuOpen = false;
    this.searchTerm = "";
  }

  ngOnInit(): void {
  }

  openMenu() {
    this.menuOpen = !this.menuOpen;
  }

  onSearch(event?: any) {
    if(event) event.preventDefault();
    this.router.navigate(["/search", { 
      q: this.searchTerm
    }]);
  }

}
