import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DecimalvalidaitonDirective } from './Directives/decimalvalidaiton.directive';

@NgModule({
  declarations: [
    AppComponent,
    DecimalvalidaitonDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
