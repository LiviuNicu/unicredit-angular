import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-corona',
  templateUrl: './corona.component.html',
  styleUrls: ['./corona.component.scss']
})
export class CoronaComponent implements OnInit {
  public countries:any[]=[];
  public selectedCountry:any={};
  constructor(
    private activatedRoute:ActivatedRoute,
    private sharedService:SharedService) { }

  ngOnInit(): void {
    console.log(this.activatedRoute)
    this.countries = this.activatedRoute.snapshot.data['countries'];
  }

  selectCountry(){
    // console.log(JSON.parse(this.selectedCountry));
    this.sharedService.updateContry(JSON.parse(this.selectedCountry))
  }

}
