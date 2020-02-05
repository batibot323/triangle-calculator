import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TextBoxModule } from './text-box/text-box.module';
import { DropDownModule } from './drop-down/drop-down.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TextBoxModule,
    DropDownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
