import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module08Page } from './module08.page';

const routes: Routes = [
  {
    path: '',
    component: Module08Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Module08PageRoutingModule {}
