import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkshopsPage } from './workshops.page';
import { Workshop01Guard } from './../shared/guards/workshop01.guard';
import { Workshop02Guard } from '../shared/guards/workshop02.guard';
import { AuthGuard } from '../shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: WorkshopsPage
  },
	{
    path: 'marrying-yourself',
    loadChildren: () => import('./marrying-yourself/marrying-yourself.module').then( m => m.MarryingYourselfPageModule),
    canActivate: [AuthGuard],
    canActivateChild: [Workshop01Guard]
  },
  {
    path: 'tribute-to-donna',
    loadChildren: () => import('./tribute-to-donna/tribute-to-donna.module').then( m => m.TributeToDonnaPageModule),
    canActivateChild: [Workshop02Guard]
  },
  {
    path: 'marrying-yourself-intro',
    loadChildren: () => import('./marrying-yourself-intro/marrying-yourself-intro.module').then( m => m.MarryingYourselfIntroPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkshopsPageRoutingModule {}
