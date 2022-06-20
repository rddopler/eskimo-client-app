import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  isAlaCarte = false;
  isDessert = false;
  isCocktails = false;

  public menuTitle: any;
  constructor() { }

  ngOnInit(): void {
    this.loadContent();
  }

  loadContent() {
    this.menuTitle = 'A LA CARTE';
  }

  onAlaCarte() {
    this.isAlaCarte = true;
    this.isDessert = false;
    this.isCocktails = false;
    this.menuTitle = 'A LA CARTE';
  }

  onDesserts() {
    this.isDessert = true;
    this.isAlaCarte = false;
    this.isCocktails = false;
    this.menuTitle = 'DESSERTS';
  }

  onCocktails() {
    this.isCocktails = true;
    this.isAlaCarte = false;
    this.isDessert = false;
    this.menuTitle = 'COCKTAILS';
  }
}
