import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: 'main-page.component.html'
})

export class MainPageComponent {

    public character:Character[]=[
        {
            name:'Krilin',
            power:500
        },
        {
            name:'Cell',
            power:10000
        }
    ];

    onNewCharacter(character:Character)
    {
        console.log('Main Page');
        console.log(character);

        this.character.push(character);       

    }

    onDeleteCharacter(index:number)
    {
        console.log('Main page '+index);
        this.character.splice(index);
    }
    
}