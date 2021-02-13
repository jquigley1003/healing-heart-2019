import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AboutMePage } from './about-me.page';
import { MySnowfallModule } from '../shared/components/my-snowfall/my-snowfall.module';

const routes: Routes = [
  {
    path: '',
    component: AboutMePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    MySnowfallModule
  ],
  declarations: [AboutMePage]
})
export class AboutMePageModule {}
