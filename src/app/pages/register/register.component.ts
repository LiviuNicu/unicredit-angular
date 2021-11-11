import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public myForm!:FormGroup;
  constructor(private formBuilder:FormBuilder, 
    private router:Router, 
    private authService:AuthService) { }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group(
      {
        email:['',[Validators.required, Validators.email]],
        firstName:['',Validators.required],
        lastName:['',Validators.required],
        password:['',[Validators.required, Validators.minLength(5)]]
      }
    )
  }

  doRegister(){
    console.log(this.myForm);
    if(this.myForm.valid){
      this.authService.register(this.myForm.value).subscribe((response)=>{
        console.log(response);
      })
    }
  }

  goToLogin(){
    this.router.navigate(['/public/login'])
  }

}
