import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.scss']
})
export class CompAComponent implements OnInit {

  value: number;

  constructor() {
    this.value = Math.random()
  }

  ngOnInit() {
  }

}
