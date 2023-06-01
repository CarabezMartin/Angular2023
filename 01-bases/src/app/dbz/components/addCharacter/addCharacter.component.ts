import { Component, OnInit } from '@angular/core';
import { Character } from '../../interfaces/character.interface';


@Component({
  selector: 'app-dbz-addCharacter',
  templateUrl: './addCharacter.component.html',
  styleUrls: ['./addCharacter.component.css']
})

export class AddCharacterComponent {

  constructor() { }
 
  public character:Character = {name:'',power:0};

  addCharacter()
  {
    console.log(this.character)
  }

}
