import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ugstaff',
  templateUrl: './ugstaff.component.html',
  styleUrls: ['./ugstaff.component.css']
})
export class UgstaffComponent implements OnInit {

  constructor() {
    let dt = localStorage.getItem('childRoutes');
    console.log(dt);
   }


  ngOnInit(): void {
  }

}
