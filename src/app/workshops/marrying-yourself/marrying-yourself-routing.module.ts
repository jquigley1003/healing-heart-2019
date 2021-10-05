import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarryingYourselfPage } from './marrying-yourself.page';

const routes: Routes = [
  {
    path: '',
    component: MarryingYourselfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarryingYourselfPageRoutingModule {}
