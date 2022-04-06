import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module13Page } from './module13.page';

const routes: Routes = [
  {
    path: '',
    component: Module13Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Module13PageRoutingModule {}
