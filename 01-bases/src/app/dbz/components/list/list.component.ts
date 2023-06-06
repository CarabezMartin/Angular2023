import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListDbzComponent {

  constructor() { }

  @Input()
  public characterList:Character [] = [{name:'Radix',power:5000}]

  @Output()
  onDeleteCharacters:EventEmitter<number> = new EventEmitter();

  onDeleteCharacter(index:number)
  {
    console.log(index);
    this.onDeleteCharacters.emit(index);
  }


}
