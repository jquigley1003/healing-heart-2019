import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarryingYourselfIntroPage } from './marrying-yourself-intro.page';

const routes: Routes = [
  {
    path: '',
    component: MarryingYourselfIntroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarryingYourselfIntroPageRoutingModule {}
