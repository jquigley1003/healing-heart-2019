import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TheSummitPage } from './the-summit.page';

const routes: Routes = [
  {
    path: '',
    component: TheSummitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TheSummitPageRoutingModule {}
