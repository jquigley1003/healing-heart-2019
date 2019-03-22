import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MorePublicationsVideosPage } from './more-publications-videos.page';

const routes: Routes = [
  {
    path: '',
    component: MorePublicationsVideosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MorePublicationsVideosPage]
})
export class MorePublicationsVideosPageModule {}
