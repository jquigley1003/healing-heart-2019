import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MoreWorkshopsPage } from './more-workshops.page';

const routes: Routes = [
  {
    path: '',
    component: MoreWorkshopsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MoreWorkshopsPage]
})
export class MoreWorkshopsPageModule {}
