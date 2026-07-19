import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class User {
  constructor(private http: HttpClient){}
  baseUrl = `http://localhost:3000/user`

  postUserData(payload:any){
    console.log(payload)
    return this.http.post(this.baseUrl , payload).subscribe(
      (res) => {console.log(res)},
      (error) => {console.log(error)}
    )
  }
}
