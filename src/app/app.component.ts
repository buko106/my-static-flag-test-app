import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CompAComponent} from "./comp-a/comp-a.component";
import {CompBComponent} from "./comp-b/comp-b.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'my-static-flag-test-app';


  @ViewChild(CompAComponent, {static: true})
  div1: CompAComponent

  @ViewChild(CompBComponent, {static: false})
  div2: CompBComponent

  ngOnInit(): void {
    console.log('ngOnInit');
    console.log(this.div1);
    console.log(this.div2);
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    console.log(this.div1);
    console.log(this.div2);
  }

  shouldShow: boolean = true;
  onClickToggle() {
    this.shouldShow = !this.shouldShow
  }

  onClickConsole() {
    console.log(`this.shouldShow = ${this.shouldShow}`);
    console.log(this.div1);
    console.log(this.div2);
  }
}
