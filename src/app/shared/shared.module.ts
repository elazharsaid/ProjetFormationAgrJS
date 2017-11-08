import { NgModule } from '@angular/core';
/**import { FormsModule } from '@angular/forms';*/
import { ReactiveFormsModule } from '@angular/forms';  // <-- #1 import module
import { CommonModule } from '@angular/common';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { MenuComponent } from './components/menu/menu.component';
import { StateDirective } from './derectives/state/state.directive';
import { RouterModule } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { ModalComponent } from './components/modal/modal.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    /**FormsModule,*/
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  declarations: [
    MenuComponent,
    StateDirective,
    FormComponent,
    ModalComponent
  ],
  exports: [
    MenuComponent,
    StateDirective,
    FormComponent
  ],
  /**You can pass an existing component as content of the modal window.
   * In this case remember to add content component as an entryComponents section of your NgModule */
  entryComponents: [
    ModalComponent
  ]
})
export class SharedModule { }
