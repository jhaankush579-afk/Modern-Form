import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root',
})
export class User {
  constructor(private http: HttpClient){}
  baseUrl = environment.apiUrl

  postUserData(payload:any ){
    let isLoading: boolean = true
    return this.http.post(`${this.baseUrl}/user` , payload)
  }
}
