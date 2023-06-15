import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  constructor() { }

  private _tagsHistory:string[] = [];

  get tagsHistory()
  {
    return [...this._tagsHistory];
  }

  searchTag(newTag:string)
  {
    this._tagsHistory.unshift(newTag);

    console.log('Valores buscados: ' + this._tagsHistory);
  }
}
