import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-model-example',
  templateUrl: './ng-model-example.component.html',
  styleUrls: ['./ng-model-example.component.css']
})
export class NgModelExampleComponent implements OnInit {

  public valueData: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
