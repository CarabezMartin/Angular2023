import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Country, Maps } from '../interfaces/country.interface';

@Injectable({providedIn: 'root'})


export class CountriesService {

    private apiUrl:string = 'https://restcountries.com/v3.1/';

    constructor(private httpClient: HttpClient) { }

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
        return this.httpClient.get<Country[]>(this.apiUrl+'capital/'+termino)
            .pipe(
                catchError(error => of([]))
            );
    }
    
    searchCountry(termino:string) : Observable<Country[]>
    {
        return this.httpClient.get<Country[]>(this.apiUrl+'name/'+termino)
            .pipe(
                catchError(error => of([]))
            );
    }
    
    searchRegion(termino:string) : Observable<Country[]>
    {
        return this.httpClient.get<Country[]>(this.apiUrl+'region/'+termino)
            .pipe(
                catchError(error => of([]))
            );
    }
}