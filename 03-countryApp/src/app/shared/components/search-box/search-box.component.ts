import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements  OnInit, OnDestroy{
   
  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSuscription?:Subscription;

  @Input() public placeholder = '';

  @Output() searchByCapitalSearchBox = new EventEmitter<string>;

  @Output() searchByCountrySearchBox = new EventEmitter<string>;

  @Output() searchByRegionSearchBox = new EventEmitter<string>;

  @Output() onDebounce = new EventEmitter<string>;

  ngOnInit(): void {

    this.debouncerSuscription = this.debouncer
    .pipe
    (
      debounceTime(2000)
    )
    .subscribe
    (
      value => this.onDebounce.emit(value)    
    );
  }

  //Se manda a llamar cuando el componente se destruye
  ngOnDestroy(): void {
    this.debouncerSuscription?.unsubscribe();
  }

  emitValue(value:string, typeSearch:string)
  {
    if(typeSearch == 'Buscar por capital. . .')
    {
      this.searchByCapitalSearchBox.emit(value);
    }
    else if(typeSearch == 'Buscar por pais. . .')
    {
      this.searchByCountrySearchBox.emit(value);
    }
    else
    {
      console.log('por Region');
      this.searchByRegionSearchBox.emit(value);
    }
    
  }

  onKeyPress(value:string)
  {
    this.debouncer.next(value);  
  }

}
