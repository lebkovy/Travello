import { ContinentService } from './../../../../shared/services/continent.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CountryService } from 'app/travelling/services/country.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'country-filter',
  templateUrl: './country-filter.component.html',
  styleUrls: ['./country-filter.component.css']
})
export class CountryFilterComponent implements OnInit {

  @Input('continent') continent;
  @Input() searchName;

  @Output() searchNameChange = new EventEmitter();
  changeName(newSearchNameChange) {
    this.searchName = newSearchNameChange;
    this.searchNameChange.emit(newSearchNameChange);
  }

  continents$ = [
    {name:"Africa", trips: 234},
    {name:"Americas", trips: 345},
    {name:"Asia", trips: 66},
    {name:"Europe", trips: 543},
    {name:"Oceania", trips: 22}
  ];

  countriesNames;
  param;

  constructor(private countryService: CountryService, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.param = params['continent'];
    });
   }

  ngOnInit() {
    this.countryService.getName().subscribe(c => {
      this.countriesNames = c;
    });
  }

}
