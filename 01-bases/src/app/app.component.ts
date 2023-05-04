import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bases';

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
