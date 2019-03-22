import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HealingExercisesPage } from './healing-exercises.page';

const routes: Routes = [
  {
    path: '',
    component: HealingExercisesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HealingExercisesPage]
})
export class HealingExercisesPageModule {}
