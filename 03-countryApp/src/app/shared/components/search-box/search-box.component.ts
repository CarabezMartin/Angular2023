import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements  OnInit{
  
  private debouncer: Subject<string> = new Subject<string>();

  @Input() public placeholder = '';

  @Output() searchByCapitalSearchBox = new EventEmitter<string>;

  @Output() searchByCountrySearchBox = new EventEmitter<string>;

  @Output() searchByRegionSearchBox = new EventEmitter<string>;

  @Output() onDebounce = new EventEmitter<string>;

  ngOnInit(): void {
    this.debouncer
    .pipe
    (
      debounceTime(2000)
    )
    .subscribe
    (
      value => this.onDebounce.emit(value)
    );
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
