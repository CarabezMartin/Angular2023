import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid'

@Injectable(
    {
        providedIn: 'root'
    }
    )

export class DbzService {
    
    constructor() { }

    public character:Character[]=[
        {
            id:uuid(),
            name:'Krilin',
            power:500
        },
        {
            id:uuid(),
            name:'Cell',
            power:10000
        }
    ];

    addCharacter(character:Character)
    {
        const newCharacter:Character = {id:uuid(),name:character.name,power:character.power}

        this.character.push(newCharacter);       

    }

    // onDeleteCharacter(index:number)
    // {
    //     console.log('Main page '+index);
    //     this.character.splice(index,1);
    // }
    
    deleteCharacterById(id:string)
    {
        this.character = this.character.filter(character => character.id != id);
    }
}