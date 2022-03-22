import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module10Page } from './module10.page';

const routes: Routes = [
  {
    path: '',
    component: Module10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Module10PageRoutingModule {}
