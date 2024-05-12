import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationItemsComponent } from './navigation-items.component';

const routes: Routes = [
  {path:'', component:NavigationItemsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavigationItemsRoutingModule { }
