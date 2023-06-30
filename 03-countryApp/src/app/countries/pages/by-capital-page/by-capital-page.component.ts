import { Component } from '@angular/core';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrls: ['./by-capital-page.component.css']
})
export class ByCapitalPageComponent {

  searchByCapital(termino:string)
  {
    console.log('Desde by capital component');
    console.log(termino);
  }

}
