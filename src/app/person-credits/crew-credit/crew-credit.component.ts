import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew-credit',
  templateUrl: './crew-credit.component.html',
  styleUrls: ['./crew-credit.component.scss']
})
export class CrewCreditComponent implements OnInit {
  @Input() declare credit: any;

  constructor() { }

  ngOnInit(): void {
  }

}
