import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarryingYourselfPage } from './marrying-yourself.page';

const routes: Routes = [
  {
    path: '',
    component: MarryingYourselfPage
  },
  {
    path: 'module01',
    loadChildren: () => import('./module01/module01.module').then( m => m.Module01PageModule)
  },
  {
    path: 'module02',
    loadChildren: () => import('./module02/module02.module').then( m => m.Module02PageModule)
  },
  {
    path: 'module03',
    loadChildren: () => import('./module03/module03.module').then( m => m.Module03PageModule)
  },
  {
    path: 'module04',
    loadChildren: () => import('./module04/module04.module').then( m => m.Module04PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarryingYourselfPageRoutingModule {}
