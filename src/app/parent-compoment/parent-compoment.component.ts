import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-compoment',
  templateUrl: './parent-compoment.component.html',
  styleUrls: ['./parent-compoment.component.css']
})
export class ParentCompomentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  /* pRoll="1"; */
  skills=["abc","pqr","xyz"];

  onDataRecive(data:string){
        this.skills.push(data);
  }
}
