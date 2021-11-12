import { Component, OnInit } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';
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
  public search:string="";

  private textChange: Subject<string> = new Subject<string>();
  public textChangeObs = this.textChange.asObservable();

  doSearch(searchText:string){
   this.textChange.next(searchText);
  }

  constructor(private sharedSerice:SharedService, private authService:AuthService) { }

  ngOnInit(): void {
    this.textChangeObs.pipe(debounceTime(1000)).subscribe((text:string)=>{
      this.getDetails(text);
    })

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
