import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { ArticleComponent } from './components/article/article.component';
import { SearchInputPipe } from './pipes/search-input.pipe';
import { CoronaComponent } from './pages/corona/corona.component';
import { CoronaStisticsComponent } from './components/corona-stistics/corona-stistics.component';
import { CoronaDetailsComponent } from './components/corona-details/corona-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ProfileComponent,
    UserCardComponent,
    ArticleComponent,
    SearchInputPipe,
    CoronaComponent,
    CoronaStisticsComponent,
    CoronaDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
