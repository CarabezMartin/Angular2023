import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  constructor(private http:HttpClient) { }

  public gifsList:Gif[] = [];
  private _tagsHistory:string[] = [];
  private apiKey : string = '0nS3czmnCBFFTwe7F1PegcywiVasRucE';
  private urlApi : string = 'https://api.giphy.com/v1/gifs';

  get tagsHistory()
  {
    return [...this._tagsHistory];
  }

  private organizeHistory(tag:string)
  {
    tag = tag.toLocaleLowerCase();

    if(this._tagsHistory.includes(tag))
    {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag != tag);
    }

    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.slice(0,10);
  }

  searchTag(newTag:string)
  {
    if(newTag.length == 0)return;

    this.organizeHistory(newTag);

    // fetch('https://api.giphy.com/v1/gifs/search?api_key=0nS3czmnCBFFTwe7F1PegcywiVasRucE&q=dragon ball&limit=10')
    //   .then(resp => resp.json()).then(data => console.log(data))
    
    this.http.get<SearchResponse>(this.urlApi + '/search?api_key='+ this.apiKey +'&q=' + newTag + '&limit=10')
    .subscribe(resp => {
      this.gifsList = resp.data;
    })

  }
}
