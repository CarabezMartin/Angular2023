import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name:string = 'IronMan';
  public age:number = 38;

  get capitalizeName():string
  {
    return this.name.toUpperCase();
    
  }

  getHeroDescription():string
  {
    return this.name + ' ' + this.age.toString();
  }

}
