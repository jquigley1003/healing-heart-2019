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
  },
  {
    path: 'module08',
    loadChildren: () => import('./module08/module08.module').then( m => m.Module08PageModule)
  },
  {
    path: 'module09',
    loadChildren: () => import('./module09/module09.module').then( m => m.Module09PageModule)
  },
  {
    path: 'module10',
    loadChildren: () => import('./module10/module10.module').then( m => m.Module10PageModule)
  },
  {
    path: 'module11',
    loadChildren: () => import('./module11/module11.module').then( m => m.Module11PageModule)
  },
  {
    path: 'module12',
    loadChildren: () => import('./module12/module12.module').then( m => m.Module12PageModule)
  },
  {
    path: 'module13',
    loadChildren: () => import('./module13/module13.module').then( m => m.Module13PageModule)
  },
  {
    path: 'module14',
    loadChildren: () => import('./module14/module14.module').then( m => m.Module14PageModule)
  },
  {
    path: 'module15',
    loadChildren: () => import('./module15/module15.module').then( m => m.Module15PageModule)
  },
  {
    path: 'module16',
    loadChildren: () => import('./module16/module16.module').then( m => m.Module16PageModule)
  },
  {
    path: 'module17',
    loadChildren: () => import('./module17/module17.module').then( m => m.Module17PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarryingYourselfPageRoutingModule {}
