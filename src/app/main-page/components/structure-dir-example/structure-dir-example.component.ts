import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structure-dir-example',
  templateUrl: './structure-dir-example.component.html',
  styleUrls: ['./structure-dir-example.component.css']
})
export class StructureDirExampleComponent implements OnInit {

  public data: number[] = [
    1,
    2,
    3
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public add() {
    this.data.push(this.data.length > 0 ? this.data[this.data.length-1] + 1 : 1);
  }

  public rest() {
    this.data.pop();
  }

}
