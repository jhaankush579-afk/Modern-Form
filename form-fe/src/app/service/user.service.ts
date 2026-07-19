import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class User {
  constructor(private http: HttpClient){}
  baseUrl = environment.apiUrl

  postUserData(payload:any){
    console.log(payload)
    return this.http.post(`${this.baseUrl}/user` , payload).subscribe(
      (res) => {
        Swal.fire("Success", "Form submitted successfully", "success");
      },
      (error) => {
        Swal.fire("Error", "Form submission failed", "error");
        console.log(error)
        alert(JSON.stringify(error))
      }
    )
  }
}
