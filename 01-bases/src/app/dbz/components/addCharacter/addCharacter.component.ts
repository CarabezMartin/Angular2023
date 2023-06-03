import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';


@Component({
  selector: 'app-dbz-addCharacter',
  templateUrl: './addCharacter.component.html',
  styleUrls: ['./addCharacter.component.css']
})

export class AddCharacterComponent {

  constructor() { }
  
  @Output()
  onNewCharacter:EventEmitter<Character> = new EventEmitter();

  public character:Character = {name:'',power:0};

  addCharacter()
  {
    if(this.character.name.length != 0)
    {
      this.onNewCharacter.emit(this.character);

      this.character.name = '';
      this.character.power = 0;
    }    
  }

}
