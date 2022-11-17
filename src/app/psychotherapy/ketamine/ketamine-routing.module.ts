import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KetaminePage } from './ketamine.page';

const routes: Routes = [
  {
    path: '',
    component: KetaminePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KetaminePageRoutingModule {}
