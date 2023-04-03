import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  constructor(private http: HttpClient) { }

  baseserverUrl = "https://localhost:7176/api/";

  signupUser(user: Array<string>){
    return this.http.post(this.baseserverUrl + "User/CreateUser", {
      Name: "Aaryan",
      Email: "aaryanparpyani2@gmail.com",
      Password: "asdfghj"
    }, 
    {responseType: 'text'});
  }
  


}
