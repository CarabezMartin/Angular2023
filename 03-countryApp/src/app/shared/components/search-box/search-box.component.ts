import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {

  @Input() public placeholder = '';

  @Output() searchByCapitalSearchBox = new EventEmitter<string>

  @Output() searchByCountrySearchBox = new EventEmitter<string>

  @Output() searchByRegionSearchBox = new EventEmitter<string>

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

}
