import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PsychotherapyPage } from './psychotherapy.page';

const routes: Routes = [
  {
    path: '',
    component: PsychotherapyPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PsychotherapyPage]
})
export class PsychotherapyPageModule {}
