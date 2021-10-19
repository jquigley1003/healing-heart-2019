import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module03Page } from './module03.page';

const routes: Routes = [
  {
    path: '',
    component: Module03Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Module03PageRoutingModule {}
