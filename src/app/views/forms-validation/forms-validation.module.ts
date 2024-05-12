import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsValidationRoutingModule } from './forms-validation-routing.module';
import { FormsValidationComponent } from './forms-validation.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormsValidationComponent
  ],
  imports: [
    CommonModule,
    FormsValidationRoutingModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FormsValidationModule { }
