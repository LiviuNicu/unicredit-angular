import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserModule, By } from '@angular/platform-browser';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';

import { LoginComponent } from './login.component';
import { DebugElement } from '@angular/core';
import { compileNgModuleDeclarationExpression } from '@angular/compiler/src/render3/r3_module_compiler';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let loginBtn: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports:[
        BrowserModule,
        FormsModule,
        HttpClientTestingModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    loginBtn = fixture.debugElement.query(By.css("#loginBtn"))
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("validate emial funct works as expected", ()=>{
    const validEmail = component.validateEmail("test@test.com");
    const invalidEmail = component.validateEmail("test");

    expect(validEmail).toBe(true);
    expect(invalidEmail).toBe(false);
  });

  it("login button shuld be enable/disabled",()=>{
    expect(loginBtn.nativeElement.disabled).toBe(true);
    component.user.email="test@test.com";
    component.user.password="1234";
    fixture.detectChanges();
    expect(loginBtn.nativeElement.disabled).toBe(false);
  })

  it("Email is not valid error works as expected",()=>{
    component.user.email="test";
    component.user.password="1234";
    component.doLogin();
    fixture.detectChanges();

    expect(component.error).toContain("email is invalid")
  });

  it("doLogin() should be called if you click on login button",()=>{
    spyOn(component,"doLogin");

    component.user.email="test@test.com";
    component.user.password="12345";
    fixture.detectChanges();

    loginBtn.nativeElement.click();

    expect(component.doLogin).toHaveBeenCalledTimes(1);
  })
});
