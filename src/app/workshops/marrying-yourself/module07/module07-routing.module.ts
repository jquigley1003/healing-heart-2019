import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module07Page } from './module07.page';

const routes: Routes = [
  {
    path: '',
    component: Module07Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Module07PageRoutingModule {}
