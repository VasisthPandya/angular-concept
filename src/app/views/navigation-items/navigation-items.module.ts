import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationItemsRoutingModule } from './navigation-items-routing.module';
import { NavigationItemsComponent } from './navigation-items.component';


@NgModule({
  declarations: [
    NavigationItemsComponent
  ],
  imports: [
    CommonModule,
    NavigationItemsRoutingModule
  ]
})
export class NavigationItemsModule { }
