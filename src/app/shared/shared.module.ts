import { NgModule } from '@angular/core';
/**import { FormsModule } from '@angular/forms';*/
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { StateDirective } from './derectives/state/state.directive';
import { RouterModule } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';  // <-- #1 import module


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    /**FormsModule,*/
    ReactiveFormsModule
  ],
  declarations: [
    MenuComponent,
    StateDirective,
    FormComponent
  ],
  exports: [
    MenuComponent,
    StateDirective,
    FormComponent
  ]
})
export class SharedModule { }
