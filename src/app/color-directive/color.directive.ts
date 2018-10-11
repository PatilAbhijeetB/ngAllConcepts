import {Directive,ElementRef} from "@angular/core";
import { Input,HostListener} from "@angular/core";

@Directive({
    selector:"[myColor]",
    })

export class ColorDirective{

    @Input("myColor") color:string;
    constructor(private el:ElementRef){

    }
    setColor(color:string){
        this.el.nativeElement.style.backgroundColor=color;
    }
    @HostListener("mouseenter")
    onmouseenter(){
        this.setColor(this.color);
    }
    @HostListener("mouseleave")
    onmouseleave(){
        this.setColor("green");
    }
}