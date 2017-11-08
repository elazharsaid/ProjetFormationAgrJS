import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { PageNotFoundComponentComponent } from './components/page-not-found-component/page-not-found-component.component';




const coreRoutes: Routes = [
  { path: 'home', component: HomeComponentComponent },
  { path: '**', component: PageNotFoundComponentComponent }
];


@NgModule({
  imports: [
    CommonModule,
    /**redirection pour children */
    RouterModule.forChild(
      coreRoutes
    )
  ],
  declarations: []
})
export class CoreRootingModule { }
