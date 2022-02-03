import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  search_bar_displayed: boolean;

  searchTerm: String;
  menuOpen: boolean;
  faBarsIcon = faBars;
  faSearchIcon = faSearch;

  @ViewChild("search") search!: ElementRef;

  constructor(private router: Router) {
    this.menuOpen = false;
    this.search_bar_displayed = false;
    this.searchTerm = "";
  }

  ngOnInit(): void {
  }

  openMenu() {
    this.menuOpen = !this.menuOpen;
  }

  onSearch(event?: any) {
    if(event) event.preventDefault();

    if(this.search_bar_displayed) {
      if(this.searchTerm.trim() !== "") {
        this.router.navigate(["/search", { 
          q: this.searchTerm
        }]);
      }
      this.searchTerm = "";
      this.search_bar_displayed = false;
    } else {
      this.search_bar_displayed = true;
    }
  }

}
