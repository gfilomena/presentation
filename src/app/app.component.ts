import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { CountriesService } from './service/countries.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CountryElement } from './model/CountryElement';
import { Filter } from './model/filter';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  loading = false;
  origin: CountryElement[] = [];
  dataSource: CountryElement[] = [];
  searchText = '';
  filters: Filter[] = [];
  limit = 40;
  size = 40;
  message = '';

  filter: any = {
    country: true,
    year: true,
    area: true,
    sex: true,
    recordtype: true,
    reliability: true,
    sourceyear: true,
    value: true,
    valuefootnotes: true
   };


  initFilter: any[] =
    [
      { id: 'country', name: 'Country or Area', enabled: true },
      { id: 'year', name: 'Year', enabled: true },
      { id: 'area', name: 'Area', enabled: true },
      { id: 'sex', name: 'Sex', enabled: true },
      { id: 'recordtype', name: 'Record Type', enabled: true },
      { id: 'reliability', name: 'Reliability', enabled: true },
      { id: 'sourceyear', name: 'Source Year', enabled: true },
      { id: 'value', name: 'Value', enabled: true },
      { id: 'valuefootnotes', name: 'Value Footnotes', enabled: true }
    ];

  @ViewChild('sidenav') sidenav: MatSidenav;

  constructor(private _countriesService: CountriesService) {}

  ngOnInit() {
    this.loading = true;
    this._countriesService.getCountries()
      .subscribe(
        data => {
          const tmp: CountryElement[] = [];
          const response: any[] = Object.values(data);
          for (const entry of response) {
            tmp.push(new CountryElement(entry));
          }
          this.origin = tmp;
          this.dataSource = tmp;
          this.loading = false;
        },
        (err: HttpErrorResponse) => {
          console.log(err.message);
        }
      );

    // init filters
    this.initFilter.forEach(item => {
      this.filters.push(new Filter(item.id, item.name));
    });

  }

  changelimit(event) {
    this.message = '';
    if (event.key === 'Enter') {
          const limit = event.target.value;
          if (limit > 40) {
             this.size = limit;
          } else {
            this.size = 40;
            this.limit = 40;
            this.message = 'Minimum 40 countries!';
          }
    }
  }



  toggle(name, event) {
    let count = 0;
    this.message = '';
    this.filters.forEach(item => item.enabled ? count++ : item.enabled);
    if (count >= 8) {
      this.filter[name] = event;
    } else {
      this.message = 'Minimum 8 data points!';
    }
  }

}
