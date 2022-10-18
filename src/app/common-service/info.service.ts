import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor(private http:HttpClient) { }
  checkStudData(){
    return this.http.get('https://jsonplaceholder.typicode.com/users/4');
  }
}
