import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.scss']
})
export class CompBComponent implements OnInit {

  value: number;

  constructor() {
    this.value = Math.random()
  }

  ngOnInit() {
  }

}
