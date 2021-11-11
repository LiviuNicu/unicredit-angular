import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  public date: Date = new Date();
  public search:string = "";

  constructor(private authService:AuthService, 
    private activatedRoute:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    // this.getAllUsers();
    this.activatedRoute.params.subscribe((params)=>{
        this.page = parseInt(params['pageNumber']);
        this.getAllArticles(this.page);
    })
  }

  goPrev(){
    if(this.page!==1)
    this.router
      .navigate(['/private/dashboard/page/'+ --this.page])
  }

  goNext(){
    this.router
      .navigate(['/private/dashboard/page/'+ ++this.page])
  }

  getAllArticles(page:number){
    this.authService.getAllArticles(page)
    .subscribe((response:any)=>{
      console.log(response);
      this.articles=response.items
    })
  }

  showAlertTitle(title:string){
    alert(title);
  }

  getAllUsers(){
    this.authService.getAllUsers()
    .subscribe((response:any)=>{
      console.log(response);
      this.users=response.allUsers;
    })
  }



}
