import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageNotFoundComponentComponent } from './components/page-not-found-component/page-not-found-component.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { CollectionService } from './services/collection/collection.service';
import { CoreRootingModule } from './core-rooting.module';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../../environments/environment.prod';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';


@NgModule({
  imports: [
    CommonModule,
    CoreRootingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],

  declarations: [
    PageNotFoundComponentComponent,
    HomeComponentComponent],

  exports: [
      HomeComponentComponent,
      PageNotFoundComponentComponent,
    ],

  providers: [
      CollectionService
    ]
})
export class CoreModule {

/**
   * @constructor make sure CoreModule is imported only by one NgModule the AppModule
   * @param parentModule
   */
  /**constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
}*/

}
