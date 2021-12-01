import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module04Page } from './module04.page';

const routes: Routes = [
  {
    path: '',
    component: Module04Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Module04PageRoutingModule {}
