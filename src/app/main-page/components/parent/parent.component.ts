import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  public chatParent: string[] = [];

  public msgP: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  public getMessage(msg: string) {
    this.chatParent.unshift(msg);
  }

  public send() {
    if (this.msgP != "") {
      this.chatParent.unshift(this.msgP);
      this.msgP = "";
    };
  }

}
