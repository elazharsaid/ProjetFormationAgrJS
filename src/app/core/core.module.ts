import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageNotFoundComponentComponent } from './components/page-not-found-component/page-not-found-component.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';


@NgModule({
  imports: [
    CommonModule
  ],

  declarations: [
    PageNotFoundComponentComponent,
    HomeComponentComponent],

  exports: [
      HomeComponentComponent,
      PageNotFoundComponentComponent,
    ],
})
export class CoreModule { }
