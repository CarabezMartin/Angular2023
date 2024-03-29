import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrls: ['./by-region-page.component.css']
})
export class ByRegionPageComponent {

  public countries : Country[] = [];
  public regions:string[] = ['America','Europe','Asia','Africa','Oceania']
  public selectedRegion?:string = '';

  constructor(private countryService : CountriesService){}

  searchByRegion(termino:string)
  {
    this.selectedRegion = termino;
    this.countryService.searchRegion(termino)
      .subscribe( countries => {
        this.countries = countries;
      } );
  }

}
