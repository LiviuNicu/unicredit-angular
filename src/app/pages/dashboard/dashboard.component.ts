import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public users:User[]=[];
  private page:number = 1;
  public articles:any[]=[];
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    // this.getAllUsers();
    this.getAllArticles(this.page);
  }

  getAllArticles(page:number){
    this.authService.getAllArticles(page)
    .subscribe((response:any)=>{
      console.log(response);
      this.articles=response.items
    })
  }

  getAllUsers(){
    this.authService.getAllUsers()
    .subscribe((response:any)=>{
      console.log(response);
      this.users=response.allUsers;
    })
  }

}
