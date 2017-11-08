import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './core/components/home-component/home-component.component';
import { ListItemsComponent } from './items/containers/list-items/list-items.component';
import { PageNotFoundComponentComponent } from './core/components/page-not-found-component/page-not-found-component.component';
import { AddComponent } from './items/containers/add/add.component';



const appRoutes: Routes = [

  // { path: 'home', component: HomeComponentComponent },
  // { path: 'list',      component: ListItemsComponent },
  // { path: 'add',      component: AddComponent },
  { path: 'items', loadChildren: './items/items.module#ItemsModule' },

  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },

  // { path: '**', component: PageNotFoundComponentComponent }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ]
  /*declarations: [] not used*/
})
export class AppRoutingModule { }
