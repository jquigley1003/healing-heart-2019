import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module01Page } from './module01.page';

const routes: Routes = [
  {
    path: '',
    component: Module01Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Module01PageRoutingModule {}
