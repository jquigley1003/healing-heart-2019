import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module17Page } from './module17.page';

const routes: Routes = [
  {
    path: '',
    component: Module17Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Module17PageRoutingModule {}
