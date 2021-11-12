import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';

import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  function updateForm(firstName:string,lastName:string,email:string,password:string){
    component.myForm.controls["firstName"].setValue(firstName);
    component.myForm.controls["lastName"].setValue(lastName)
    component.myForm.controls["email"].setValue(email)
    component.myForm.controls["password"].setValue(password)
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports:[
        BrowserModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("empty form should be invalid", () => {
    updateForm("","","","");
    fixture.detectChanges();
    expect(component.myForm.valid).toBe(false);
  });

  it("form should be valid",()=>{
    updateForm("test","test","test@test.com","12345");
    fixture.detectChanges();
    expect(component.myForm.valid).toBe(true);
  });

  it("form is invalid because email is invalid",()=>{
    updateForm("test","test","test","12345");
    fixture.detectChanges();
    expect(component.myForm.valid).toBe(false);
    expect(component.myForm.controls['email'].getError("email")).toBeTruthy();
  })
});
