import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  constructor(private router:Router) { }
  staffData:any=[
    { name:'Sameer', age:31, id:41},
    {name:'Suraj', age:32, id:42}
  ]

 
  ngOnInit(): void {
  }
  showDetailsStaff(dt:any){
    console.log(dt);
    let id= dt.id;
    let name = dt.name;
    this.router.navigateByUrl(`staff/${id}/${name}`);

  }

}
