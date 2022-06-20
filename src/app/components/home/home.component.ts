import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  showBrooklynAddress = false;
  showManhattanAddress = false;

  constructor() { }

  ngOnInit(): void {
  }

  changeToBrooklynAddress() {
    this.showBrooklynAddress = true;
  }

  changeToManhattanAddress() {
    this.showManhattanAddress = true;
  }
}
