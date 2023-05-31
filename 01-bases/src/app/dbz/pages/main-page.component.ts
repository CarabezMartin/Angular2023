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
    
}