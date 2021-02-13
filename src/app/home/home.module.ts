import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';

import { SharedModalsModule } from '../modals/shared-modals/shared.modals.module';
import { MySnowfallModule } from '../shared/components/my-snowfall/my-snowfall.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),
    SharedModalsModule,
    MySnowfallModule
  ],
  declarations: [
    HomePage
  ]
})
export class HomePageModule {}
