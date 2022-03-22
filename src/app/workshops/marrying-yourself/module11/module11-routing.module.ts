import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module11Page } from './module11.page';

const routes: Routes = [
  {
    path: '',
    component: Module11Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Module11PageRoutingModule {}
