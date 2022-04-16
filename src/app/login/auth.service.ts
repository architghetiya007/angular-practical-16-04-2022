import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  
  Register(data:any) {
     return this.http.post("http://localhost:6005/api/v1/auth/register",data);
  }

  Login(data:any) {
    return this.http.post("http://localhost:6005/api/v1/auth/login",data);
  }

}
