import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {OrdersModule} from './orders/orders.module';
import {SiteFrameworkModule} from './site-framework/site-framework.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    OrdersModule,
    SiteFrameworkModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
