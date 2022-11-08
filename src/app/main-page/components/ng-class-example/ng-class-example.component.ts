import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class-example',
  templateUrl: './ng-class-example.component.html',
  styleUrls: ['./ng-class-example.component.css']
})
export class NgClassExampleComponent implements OnInit {

  public stateFigure = {
    rectangle: true,
    circle: false,
    triangle: false
  };

  constructor() { }

  ngOnInit(): void {
  }

  public setRectangle() {
    this.stateFigure = {
      rectangle: true,
      circle: false,
      triangle: false
    };
  }

  public setCircle() {
    this.stateFigure = {
      rectangle: false,
      circle: true,
      triangle: false
    };
  }

  public setTriangle() {
    this.stateFigure = {
      rectangle: false,
      circle: false,
      triangle: true
    };
  }

}
