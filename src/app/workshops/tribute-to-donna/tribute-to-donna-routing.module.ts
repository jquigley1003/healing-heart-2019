import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TributeToDonnaPage } from './tribute-to-donna.page';

const routes: Routes = [
  {
    path: '',
    component: TributeToDonnaPage
  },
  {
    path: 'module01',
    loadChildren: () => import('./module01/module01.module').then( m => m.Module01PageModule)
  },
  {
    path: 'module02',
    loadChildren: () => import('./module02/module02.module').then( m => m.Module02PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TributeToDonnaPageRoutingModule {}
