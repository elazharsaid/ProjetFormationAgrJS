import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { ListItemsComponent } from './items/components/list-items/list-items.component';


@NgModule({
  imports: [
    BrowserModule,
    SharedModule,
    CoreModule,
    itemsModule,
  ],
  declarations: [
    AppComponent,
    ListItemsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
