import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataSharingService } from '../data-sharing.service';

@Component({
  selector: 'app-firstcomp',
  templateUrl: './firstcomp.component.html',
  styleUrls: ['./firstcomp.component.css']
})
export class FirstcompComponent implements OnInit {
sampleFirstData:any;
data:any;
  constructor(private dataSer:DataSharingService,private router:Router) {
    this.dataSer.getMessage().subscribe(
      (res:any)=>{
        console.log(res);
        this.data= res;
      }
    )
   }

  ngOnInit(): void {
  }



  sendDtFromFirst(){
this.sampleFirstData="This data from First Component";
this.dataSer.setMessage(this.sampleFirstData);
this.router.navigate(['second']);
  }
}
