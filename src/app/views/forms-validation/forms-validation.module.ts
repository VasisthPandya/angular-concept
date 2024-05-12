import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsValidationRoutingModule } from './forms-validation-routing.module';
import { FormsValidationComponent } from './forms-validation.component';


@NgModule({
  declarations: [
    FormsValidationComponent
  ],
  imports: [
    CommonModule,
    FormsValidationRoutingModule
  ]
})
export class FormsValidationModule { }
