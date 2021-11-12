import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private country = new BehaviorSubject<any>({});
  public countryObs = this.country.asObservable();
  constructor() { }

  updateContry(selectedCountry:any){
    this.country.next(selectedCountry);
  }
}
