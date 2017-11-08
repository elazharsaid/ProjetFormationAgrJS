import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { ItemComponent } from './components/item/item.component';
import { ListItemsComponent } from './containers/list-items/list-items.component';
import { AddComponent } from './containers/add/add.component';
import { ItemRoutingModule } from './item-routing.module';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ItemRoutingModule
  ],

  declarations: [
    ListItemsComponent,
    ItemComponent,
    AddComponent
  ],
  exports: [
    ListItemsComponent
    ],
})
export class ItemsModule { }
