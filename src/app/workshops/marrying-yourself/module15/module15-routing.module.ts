import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module15Page } from './module15.page';

const routes: Routes = [
  {
    path: '',
    component: Module15Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Module15PageRoutingModule {}
