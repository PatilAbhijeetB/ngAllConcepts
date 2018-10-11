import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.css']
})
export class StructuralDirectivesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  arr=[10,20,30,40,50,60,70]
  isTry=false;
  rollno="1";
}
