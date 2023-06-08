import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';
import { v4 as uuid } from 'uuid'

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: 'main-page.component.html'
})

export class MainPageComponent {

    constructor(public dbzService:DbzService){}

    get characters(): Character[]
    {
        return this.dbzService.character;

    }

    onDeleteCharacter(id:string)
    {
        this.dbzService.deleteCharacterById(id);
    }
    
    onNewCharacter(character:Character)
    {
        const newCharacter:Character = {id:uuid(),name:character.name,power:character.power}

        this.dbzService.addCharacter(newCharacter);      

    }
}