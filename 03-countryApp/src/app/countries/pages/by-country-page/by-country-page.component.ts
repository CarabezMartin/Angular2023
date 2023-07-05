import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrls: ['./by-country-page.component.css']
})
export class ByCountryPageComponent {

  public countries : Country[] = [];

  constructor(private countryService: CountriesService ){}

  searchByCountry(termino:string)
  {
    this.countryService.searchCountry(termino)
      .subscribe( countries => {
        this.countries = countries;
      } );
  }

}
