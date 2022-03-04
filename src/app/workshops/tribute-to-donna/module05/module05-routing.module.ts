import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module05Page } from './module05.page';

const routes: Routes = [
  {
    path: '',
    component: Module05Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Module05PageRoutingModule {}
