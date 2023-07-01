import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrls: ['./by-capital-page.component.css']
})
export class ByCapitalPageComponent {

  public countries : Country[] = [];
  constructor(private countryService : CountriesService){}

  searchByCapital(termino:string)
  {
    this.countryService.searchCapital(termino)
      .subscribe( countries => {
        this.countries = countries;
      } );
  }

}
