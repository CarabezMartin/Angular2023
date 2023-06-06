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
    //Esta instruccion nos ayuda a hacer debug del proyecto
    //debugger;

    if(this.character.name.length == 0)
    {
      return;      
    }    
    else
      this.onNewCharacter.emit(this.character);

    //this.character.name = '';
    //this.character.power = 0;
  }

}
