import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module16Page } from './module16.page';

const routes: Routes = [
  {
    path: '',
    component: Module16Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Module16PageRoutingModule {}
