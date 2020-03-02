import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as jwt from 'jsonwebtoken';


const SECRET_KEY = 'secretkey12345';
@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor( private http: HttpClient) { }

  login( email: string , password: string ) {
   return this.http.post('http://localhost:3001/api/auth/login', {
     'email': email,
     'password': password });
   }

   isLoged() {
    const token = localStorage.getItem('token');
    return this.http.post('http://localhost:3001/api/auth/isLoged', {
      'token': token
     });
   }
}
