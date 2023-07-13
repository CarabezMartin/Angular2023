import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, delay, map, of } from 'rxjs';
import { Country, Maps } from '../interfaces/country.interface';

@Injectable({providedIn: 'root'})


export class CountriesService {

    private apiUrl:string = 'https://restcountries.com/v3.1/';

    constructor(private httpClient: HttpClient) { }

    private getCountryRequest(url:string): Observable<Country[]>
    {
        return this.httpClient.get<Country[]>(url)
            .pipe(
            catchError(error => of([])),
            delay(2000)
        );

    }

    searchCountryByAlphaCode(code:string): Observable<Country | null>
    {
        return this.httpClient.get<Country[]>(this.apiUrl+'alpha/'+code)
            .pipe(
                map(countries => countries.length > 0 ? countries[0]:null),
                catchError(error => of(null))
            );
    }
    
    searchCapital(termino:string) : Observable<Country[]>
    {
        const url = this.apiUrl+'capital/'+termino;
        return this.getCountryRequest(url);
    }
    
    searchCountry(termino:string) : Observable<Country[]>
    {
        const url = this.apiUrl+'name/'+termino
        return this.getCountryRequest(url);
    }
    
    searchRegion(termino:string) : Observable<Country[]>
    {
        const url = this.apiUrl+'region/'+termino
        return this.getCountryRequest(url);
    }
}