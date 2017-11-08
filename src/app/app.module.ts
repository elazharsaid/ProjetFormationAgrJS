import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

/**module apres composant  */
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
// import { ItemsModule } from './items/items.module';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { environment } from '../environments/environment.prod';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    // ItemsModule,
    CoreModule,
    SharedModule,
    RouterModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(router: Router) {
    if (!environment.production) {
      console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
    }

  }

}
