import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { DataSharingService } from '../data-sharing.service';

@Component({
  selector: 'app-secondcomp',
  templateUrl: './secondcomp.component.html',
  styleUrls: ['./secondcomp.component.css']
})
export class SecondcompComponent implements OnInit {
data:any;
  constructor(private dataSe:DataSharingService, private router :Router) { 
    this.dataSe.getMessage().subscribe(
      (res:any)=>{
        console.log(res);
        this.data=res;
        
      }
    )
  }

  ngOnInit(): void {
  }

  sendDtFromSecond(){
    let dt="This is the data from second component to first component."
    this.dataSe.setMessage(dt);
    this.router.navigate(['first']);
  }
}
