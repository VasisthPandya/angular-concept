import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewsRoutingModule } from './views-routing.module';
import { ViewsComponent } from './views.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [
    ViewsComponent
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule
  ]
})
export class ViewsModule { }
