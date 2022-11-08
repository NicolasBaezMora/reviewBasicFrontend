import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[numbersOnly]'
})
export class NumbersOnlyDirective {

  constructor(
    private ref: ElementRef
  ) { }

  @HostListener('input', ['$event'])
  public onChange(event: Event) {
    const regNumOnly = /[^0-9]]*/;

    const init = this.ref.nativeElement.value;

    this.ref.nativeElement.value = init.replace(regNumOnly, '');

  }

}
