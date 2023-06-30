import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {

  @Input() public placeholder = '';

  @Output() searchByCapitalSearchBox = new EventEmitter<string>

  emitValue(value:string)
  {
    this.searchByCapitalSearchBox.emit(value);
  }

}
