import { Component, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interface';

@Component({
  selector: 'app-gifs-card',
  templateUrl: './gifs-card.component.html',
  styleUrls: []
})
export class GifsCardComponent implements OnInit{
  
  public gifs !: Gif;

  ngOnInit(): void {
    if(!this.gifs) throw new Error('Gif es requerido.');
  }

  

}
