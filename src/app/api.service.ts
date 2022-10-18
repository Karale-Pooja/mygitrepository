import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  getApiData(){
   return this.http.get  ('https://reqres.in/api/users?page=2');
  }
  

  sendApiData(dt:any){
return this.http.post('https://reqres.in/api/users',dt)
  }


  updateApiData(dt1:any){
    return this.http.put('https://reqres.in/api/users/2', dt1)
  }

    
  }

