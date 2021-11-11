import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginDTO } from 'src/app/interfaces/login-dto';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public email:string='testFromComponent@test.com';
  public isDisabled:boolean = false;
  public user:LoginDTO= {
    email:"",
    password:""
  }
  public error:boolean|string = false;
  public cursorType="pointer";
  constructor(private authService:AuthService, private router:Router) {}

  ngOnInit(): void {
  }

  doLogin(): void{
    this.error=false;
    console.log("LOGIN CLICKED")
    if(this.validateEmail(this.user.email)){
       this.authService.login(this.user).subscribe(
         {
          next:(response:any)=>{
            console.log(response);
            localStorage.setItem("token",response.token);
            this.router.navigate(["/private/dashboard"]);
          },
          error:(err)=>{
            console.log(err);
            this.error = err.error.message;
          }
         }
       )
    }else{
      this.error="email is invalid"
    }
    
  }

  validateEmail(email:string) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  isNotValid():boolean{
    return !this.user.email || !this.user.password
  }

}
