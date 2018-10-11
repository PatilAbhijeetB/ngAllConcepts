import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appAttriDir]'
})
export class AttriDirDirective {

  constructor(el:ElementRef) {
    el.nativeElement.style.backgroundColor="yellow";
   }

}
