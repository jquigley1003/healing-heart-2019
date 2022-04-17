import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module14Page } from './module14.page';

const routes: Routes = [
  {
    path: '',
    component: Module14Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Module14PageRoutingModule {}
