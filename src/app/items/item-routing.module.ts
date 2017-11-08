import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemsComponent } from './containers/list-items/list-items.component';
import { AddComponent } from './containers/add/add.component';
import { RouterModule, Routes } from '@angular/router';


const itemsRoutes: Routes = [
   // { path: 'home', component: HomeComponentComponent },
  { path: 'list',      component: ListItemsComponent },
  { path: 'add',      component: AddComponent },

];



@NgModule({
  imports: [
    CommonModule,
    /**redirection pour children */
    RouterModule.forChild(
      itemsRoutes
    )
  ],
  declarations: []
})
export class ItemRoutingModule { }

