import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-corona-details',
  templateUrl: './corona-details.component.html',
  styleUrls: ['./corona-details.component.scss']
})
export class CoronaDetailsComponent implements OnInit {
  public country:any={};
  public details:any={};
  constructor(private sharedSerice:SharedService, private authService:AuthService) { }

  ngOnInit(): void {
    this.sharedSerice.countryObs.subscribe((value:any)=>{
      console.log("Corona Details",value)
      this.country=value;
      if(this.country && this.country.name){
        this.getDetails(this.country.name)
      }
    })
  }

  getDetails(countryName:string){
    this.authService.getCovidStatisticsByCountry(countryName).subscribe((response:any)=>{
      this.details=response;
    })
  }

}
