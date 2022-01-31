import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  onClickTest(genre: any) {
    console.log(genre);
  }

  closeMenu() {
    this.onMenuClose.emit();
  }

  constructor() {}

}
