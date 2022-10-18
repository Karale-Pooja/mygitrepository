import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input()parentData: any;
@Output()itemEvent = new EventEmitter <any>();

dataFromChildToParent:any;
  constructor() { 
    this.dataFromChildToParent="This is the data from child to parent component"
  }


  ngOnInit(): void {
  }
  sendDataFromParent(){
    console.log("hi");
    this.itemEvent.emit(this.dataFromChildToParent);
}
noramlMethodofChild(){
  console.log("Hello this is an event from child cmp");
}

}