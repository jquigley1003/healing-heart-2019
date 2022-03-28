import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module12Page } from './module12.page';

const routes: Routes = [
  {
    path: '',
    component: Module12Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Module12PageRoutingModule {}
