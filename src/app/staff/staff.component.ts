import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {
  staffId:any;
  staffName:any;
  constructor(private actRoute: ActivatedRoute) {
    //  to fecth the route data we have two options
    
    // 1. Route Param (Direct Values)
    console.log(this.actRoute.snapshot.params);
    // this.staffId= this.actRoute.snapshot.params['id'];
    // this.staffName = this.actRoute.snapshot.params['name'];


    // 2. Param Map (Obserrvable values)
    console.log(this.actRoute.paramMap);
    this.actRoute.paramMap.subscribe((res:any)=>{
      console.log(res);
      this.staffId = res.params.id;
      this.staffName= res.params.name;
    })
   }

  ngOnInit(): void {
  }

}
