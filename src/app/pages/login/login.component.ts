import { Component, OnInit } from '@angular/core';
import { LoginDTO } from 'src/app/interfaces/login-dto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public email:string='testFromComponent@test.com';
  public isDisabled:boolean = false;
  public user:LoginDTO= {
    email:"test@test.com",
    password:""
  }
  public error:boolean|string = false;
  public cursorType="pointer";
  constructor() {}

  ngOnInit(): void {
  }

  doLogin(): void{
    this.error=false;
    console.log("LOGIN CLICKED")
    if(this.validateEmail(this.user.email)){
        //TO DO: O SA APELAM SERVICIUL DE LOGIN
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
