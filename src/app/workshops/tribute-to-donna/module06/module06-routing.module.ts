import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module06Page } from './module06.page';

const routes: Routes = [
  {
    path: '',
    component: Module06Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Module06PageRoutingModule {}
