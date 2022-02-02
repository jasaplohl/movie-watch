import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cast-credit',
  templateUrl: './cast-credit.component.html',
  styleUrls: ['./cast-credit.component.scss']
})
export class CastCreditComponent implements OnInit {
  @Input() declare credit: any;

  constructor() { }

  ngOnInit(): void {
  }

}
