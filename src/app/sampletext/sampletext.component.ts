import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';



@Component({
  selector: 'app-sampletext',
  templateUrl: './sampletext.component.html',
  styleUrls: ['./sampletext.component.css']
})
export class SampletextComponent implements OnInit {

  constructor(private api:ApiService) { }
  // checkFlag:boolean=true;
  checkFlag:boolean=false;
  subject:any=['Apple','Ball','Cat','Dog','Goat'];
  subjectFlag:boolean=true;

  data:any;
  data2:any;
  
  ngOnInit(): void {
    this.getData();
    this.sendData();
    this.updateData();
  }


  getData(){
    this.api.getApiData().subscribe(
       (res:any)=>{
         console.log(res)
       },
       (err:any)=>{
         console.log(err);
       }
     )
   } 


  //start sain
  // sendData(){
  //   this.data={
  //     name:'Pooja Karale',
  //     job:'Masterchef',
      
    
  //   }
  //   this.api.sendApiData(this.data).subscribe(
  //     (res:any)=>{
  //       this.data3=res;
        
  //       this.data4=this.data2.push(this.data3);
  //       console.log(res);
  //     }
  //   )
  // }
  //end sain

//new mtd 




  //my send
   sendData(){
    this.data = {
      name:'Pooja',
      job:'Masterchef'
    }
    this.api.sendApiData(this.data).subscribe(
      (res:any)=>{
        console.log(res)
      }
    )
   }




  updateData(){
    this.data={
      name:'Kiran Patil',
      job:'HOD',
    }
    this.api.updateApiData(this.data).subscribe(
      (res:any)=>{
        console.log(res);
      }
    )


  }
}
