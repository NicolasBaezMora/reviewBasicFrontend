import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Output()
  public onInput: EventEmitter<string> = new EventEmitter();

  @Input()
  public chatParent: string[] = [];

  public msgC: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  public send() {
    if (this.msgC != "") {
      this.onInput.emit(this.msgC);
      this.msgC = "";  
    }
  }

}
