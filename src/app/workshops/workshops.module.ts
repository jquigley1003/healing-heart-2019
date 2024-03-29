import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WorkshopsPageRoutingModule } from './workshops-routing.module';
import { WorkshopsPage } from './workshops.page';
import { MySnowfallModule } from '../shared/components/my-snowfall/my-snowfall.module';

const routes: Routes = [
  {
    path: '',
    component: WorkshopsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkshopsPageRoutingModule,
    MySnowfallModule
  ],
  declarations: [WorkshopsPage]
})
export class WorkshopsPageModule {}
