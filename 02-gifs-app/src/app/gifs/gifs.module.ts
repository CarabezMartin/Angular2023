import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { CardListComponent } from './components/card-list/card-list.component';



@NgModule({
  declarations: [
    HomeComponent,
    SearchComponent,
    CardListComponent
  ],
  imports: [
    CommonModule
  ],
  exports:
  [
    HomeComponent
  ]
})
export class GifsModule { }
