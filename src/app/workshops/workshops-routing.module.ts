import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkshopsPage } from './workshops.page';

const routes: Routes = [
  {
    path: '',
    component: WorkshopsPage
  },
	{
    path: 'marrying-yourself',
    loadChildren: () => import('./marrying-yourself/marrying-yourself.module').then( m => m.MarryingYourselfPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkshopsPageRoutingModule {}
