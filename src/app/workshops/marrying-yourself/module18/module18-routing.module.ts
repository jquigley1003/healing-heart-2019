import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module18Page } from './module18.page';

const routes: Routes = [
  {
    path: '',
    component: Module18Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Module18PageRoutingModule {}
