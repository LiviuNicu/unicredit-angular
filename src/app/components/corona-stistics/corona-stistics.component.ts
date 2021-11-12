import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-corona-stistics',
  templateUrl: './corona-stistics.component.html',
  styleUrls: ['./corona-stistics.component.scss']
})
export class CoronaStisticsComponent implements OnInit {
  public country:any={};
  public imageUrl:string = "";
  constructor(private sharedSerice:SharedService) { }

  ngOnInit(): void {
    this.sharedSerice.countryObs.subscribe((value:any)=>{
      console.log("Corona Statistics",value)
      this.country=value;
      if(this.country && this.country.alpha2Code){
        this.imageUrl="https://corona.dnsforfamily.com/graph.png?c="+this.country.alpha2Code
      }
      
    })
  }

}
