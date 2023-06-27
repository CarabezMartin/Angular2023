import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card',
  templateUrl: './card.component.html'
})
export class CardComponent implements OnInit {

  @Input()
  public gifCard !: Gif;


  ngOnInit(): void {
    if ( !this.gifCard ) throw new Error('Gif property is required');
  }

}
