import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module09Page } from './module09.page';

const routes: Routes = [
  {
    path: '',
    component: Module09Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Module09PageRoutingModule {}
