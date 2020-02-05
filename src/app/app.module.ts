import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TextBoxModule } from './text-box/text-box.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TextBoxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
