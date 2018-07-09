import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private _url = './assets/data/countries.json';

  constructor(private httpService: HttpClient) { }


  getCountries() {
    return this.httpService.get(this._url);
  }
}
