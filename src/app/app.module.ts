import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {CoreModule} from './core/core.module';
import {ItemsListModule} from './items-list/items-list.module';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryData} from './core/in-memory-data';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {UsedMaterialModule} from './used-material.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,

    HttpClientModule,
    UsedMaterialModule,

    BrowserAnimationsModule, /*install and import web-animations-js in polyfills.ts*/


    CoreModule,
    ItemsListModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryData, {passThruUnknownUrl: true, dataEncapsulation: false})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
