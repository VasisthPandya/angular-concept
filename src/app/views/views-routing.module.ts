import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewsComponent } from './views.component';

const routes: Routes = [
  {
    path: "", component: ViewsComponent,
    children: [
      {path: '', redirectTo: 'navigation-items', pathMatch: 'full'},
      {
        path: 'navigation-items',
        loadChildren: () => import('./navigation-items/navigation-items.module').then(m => m.NavigationItemsModule),
      },
      {
        path: 'forms-validation',
        loadChildren: () => import('./forms-validation/forms-validation.module').then(m => m.FormsValidationModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
