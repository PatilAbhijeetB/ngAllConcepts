import { Component, OnInit, Input } from '@angular/core';

import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 /*  data=[{rollno : '1' , name : 'abc'},
        {rollno : '2' , name : 'xyz'}];
  @Input() selectedRollNo='1';
 */
  skills : string;
  @Output() myEmitter = new EventEmitter<string>();
  onSubmitClick()
  {
    
    this.myEmitter.emit(this.skills);
  }
}
