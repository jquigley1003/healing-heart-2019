import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MoreAboutMePage } from './more-about-me.page';

const routes: Routes = [
  {
    path: '',
    component: MoreAboutMePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MoreAboutMePage]
})
export class MoreAboutMePageModule {}
