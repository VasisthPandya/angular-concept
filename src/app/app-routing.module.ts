import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'', redirectTo: 'views', pathMatch: 'full'
  },
  {
    path: 'views',
    loadChildren: () => import('./views/views.module').then(m => m.ViewsModule),
  },
  {
    path: '**',
    redirectTo: 'views',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
