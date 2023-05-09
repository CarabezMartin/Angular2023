import { Component } from "@angular/core";

@Component(
    {
        selector: 'app-counter',
        templateUrl: './counter.component.html',
        styleUrls: ['./counter.component.css']
    }
)
export class CounterComponent
{
    public contador:number = 0;

    add()
    {
        this.contador = this.contador + 1;
    }

    rest()
    {
        this.contador = this.contador - 1;
    }    
}