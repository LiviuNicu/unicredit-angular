import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginDTO } from '../interfaces/login-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl:string= environment.api;
  private httpOptionsPublic = {
    headers: new HttpHeaders({"Content-type":"application/json"})
  }
  constructor(private http:HttpClient) { }

  login(user:LoginDTO){
    return this.http.post(this.baseUrl+"/api/auth/login",user,this.httpOptionsPublic)
  }

  register(user:any){
    return this.http.post(this.baseUrl+"/api/auth/register",user,this.httpOptionsPublic)
  }

}
