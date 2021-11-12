import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoronaComponent } from './pages/corona/corona.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { CountriesResolver } from './resolvers/countries.resolver';

const routes: Routes = [
  {path:"", redirectTo:"/public/login", pathMatch:"full"},
  {
    path:"public",
    children:[
      {
        path:"login",
        component:LoginComponent
      },
      {
        path:"register",
        component:RegisterComponent
      }
    ]
  },
  {
    path:"private",
    children:[
      {
        path:"dashboard/page/:pageNumber",
        component:DashboardComponent
      },
      {
        path:"profile/:id",
        component:ProfileComponent
      },
      {
        path:"corona",
        component:CoronaComponent,
        resolve:{countries:CountriesResolver}
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
