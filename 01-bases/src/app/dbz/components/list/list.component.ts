import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListDbzComponent {

  constructor() { }

  @Input()
  public characterList:Character [] = [{id:uuid(),name:'Radix',power:5000}]

  @Output()
  onDeleteCharactersList:EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id:string)
  {
    console.log('ID: '+ id);
    this.onDeleteCharactersList.emit(id);
  }


}
