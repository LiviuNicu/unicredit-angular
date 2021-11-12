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
    headers: new HttpHeaders({"content-type":"application/json"})
  }
  private httpOptionsPrivate = {
    headers: new HttpHeaders({
      "Content-Type":"application/json",
      "Authorization":"Bearer "+localStorage.getItem("token")
    })
  }
  constructor(private http:HttpClient) { }

  login(user:LoginDTO){
    console.log(user);
    return this.http.post(this.baseUrl+"/api/auth/login",user,this.httpOptionsPublic)
  }

  register(user:any){
    return this.http.post(this.baseUrl+"/api/auth/register",user,this.httpOptionsPublic)
  }

  getAllUsers(){
    return this.http.get(this.baseUrl+"/api/users",this.httpOptionsPrivate);
  }

  getAllArticles(page:number){
    return this.http.get("https://chroniclingamerica.loc.gov/search/titles/results/?terms=oakland&format=json&page="+page)
  }

  getAllContries(){
    return this.http.get("https://restcountries.com/v2/all")
  }



}
