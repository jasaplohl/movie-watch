import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menuOpen: boolean;
  faBarsIcon = faBars;

  constructor() {
    this.menuOpen = false;
  }

  ngOnInit(): void {
  }

  openMenu() {
    this.menuOpen = !this.menuOpen;
  }

}
