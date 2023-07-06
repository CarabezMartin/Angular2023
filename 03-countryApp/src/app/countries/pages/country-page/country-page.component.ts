import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.css']
})
export class CountryPageComponent implements OnInit{

  constructor(private activateRoute:ActivatedRoute,
              private countriesService:CountriesService,
              private router:Router){}

  ngOnInit(): void {
    this.activateRoute.params
    .pipe(
      switchMap(({id}) => this.countriesService.searchCountryByAlphaCode(id))
    )
    .subscribe(country => {
      
      if(!country)
      {
        return this.router.navigateByUrl('');
      }
      console.log('Tenemos pais');
      return;

    })
  }

  
}
