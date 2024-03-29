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
  },
  {
    path: 'module03',
    loadChildren: () => import('./module03/module03.module').then( m => m.Module03PageModule)
  },
  {
    path: 'module04',
    loadChildren: () => import('./module04/module04.module').then( m => m.Module04PageModule)
  },
  {
    path: 'module05',
    loadChildren: () => import('./module05/module05.module').then( m => m.Module05PageModule)
  },
  {
    path: 'module06',
    loadChildren: () => import('./module06/module06.module').then( m => m.Module06PageModule)
  },
  {
    path: 'module07',
    loadChildren: () => import('./module07/module07.module').then( m => m.Module07PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TributeToDonnaPageRoutingModule {}
