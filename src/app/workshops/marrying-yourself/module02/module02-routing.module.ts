import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module02Page } from './module02.page';

const routes: Routes = [
  {
    path: '',
    component: Module02Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Module02PageRoutingModule {}
