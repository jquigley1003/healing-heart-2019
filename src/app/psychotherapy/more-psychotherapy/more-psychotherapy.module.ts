import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MorePsychotherapyPage } from './more-psychotherapy.page';

const routes: Routes = [
  {
    path: '',
    component: MorePsychotherapyPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MorePsychotherapyPage]
})
export class MorePsychotherapyPageModule {}
