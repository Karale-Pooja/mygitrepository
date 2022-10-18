import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo1';
cheackFlag:boolean=true;

 // ug = ['UG Home', 'UG Staff', 'UG Student', 'UG Courses'];
 ug=[
  {name:'UG Home', path:'ug'},
  {name:'UG Staff', path:'ug/ugstaff'},
  {name:'UG Student', path:'ug/ugstud'},
  {name:'UG Courses', path:'ug/ugcourses'}
]
pg=[
  {name:'PG Home',path:'pg'},
  {name:'PG Staff',path:'pg/pgstaff'},
  {name:'PG Student',path:'pg/pgstud'},
  {name:'PG Admission',path:'pg/pgadmission'},

]
constructor(private router: Router){

}

navigatetoStud(){

  if(this.cheackFlag== true){
    // this.router.navigate(['stud']);
    this.router.navigateByUrl('stud');
  }
  // else{
  //   this.router.navigate(['error']);
  // }
}
onSelectUGmenu(menu:any){  
  let route= menu.target.value;
  console.log(route);
  this.router.navigate([route]);

  localStorage.setItem('childRoutes','Hellow Team');
  }


  onSelectPGmenu(menu:any){  
    let route= menu.target.value;
    console.log(route);
    this.router.navigate([route]);
  
}
}