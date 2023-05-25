import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames:string [] = ['SpiderMan','IronMan','Thor','Hulk','Capitan America','Black Panther','Hawk Eye','Black Widow','AntMan']
  public removedHero:string|undefined = '';

  removeLastHero()
  {
    this.removedHero = this.heroNames.pop();
  }

}
