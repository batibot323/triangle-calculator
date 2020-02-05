import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropDownComponent } from './drop-down.component';



@NgModule({
  declarations: [DropDownComponent],
  imports: [
    CommonModule
  ],
  exports: [
    DropDownComponent
  ]
})
export class DropDownModule { }
