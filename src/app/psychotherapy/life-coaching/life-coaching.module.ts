import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LifeCoachingPage } from './life-coaching.page';

const routes: Routes = [
  {
    path: '',
    component: LifeCoachingPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LifeCoachingPage]
})
export class LifeCoachingPageModule {}
