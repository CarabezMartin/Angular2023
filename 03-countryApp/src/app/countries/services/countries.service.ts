import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({providedIn: 'root'})


export class ServiceNameService {

    private apiUrl:string = 'https://restcountries.com/v3.1/';

    constructor(private httpClient: HttpClient) { }
    
    searchCapital(termino:string) : Observable<Country[]>
    {
        return this.httpClient.get<Country[]>(this.apiUrl+'capital/'+termino);
    }
}