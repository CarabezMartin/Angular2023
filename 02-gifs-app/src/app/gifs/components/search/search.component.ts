import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor(private gifsService:GifsService){}

  @ViewChild('txtBuscar')
  tagInput !: ElementRef<HTMLInputElement>;

  searchTag()
  {
    const newTag = this.tagInput.nativeElement.value;
    console.log(newTag);
    this.gifsService.searchTag(newTag);
    this.tagInput.nativeElement.value = '';
  }

}
