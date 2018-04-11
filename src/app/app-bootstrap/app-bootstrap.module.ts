// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// ngx-bootstrap
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AlertModule } from 'ngx-bootstrap/alert';
import { AccordionModule } from 'ngx-bootstrap/accordion';

@NgModule({
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    AlertModule.forRoot(),
    AccordionModule.forRoot()
  ],
  exports: [BsDropdownModule, TooltipModule, ModalModule, AlertModule, AccordionModule]
})
export class AppBootstrapModule {}
