import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderDirective } from  './header.directive';


@NgModule({
  declarations: [HeaderDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderDirective
  ]
})
export class HeaderDeclerationModule { }
