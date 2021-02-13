import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ContactPage } from './contact.page';

import { SharedModalsModule } from '../modals/shared-modals/shared.modals.module';
import { MySnowfallModule } from '../shared/components/my-snowfall/my-snowfall.module';

const routes: Routes = [
  {
    path: '',
    component: ContactPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedModalsModule,
    MySnowfallModule
  ],
  declarations: [
    ContactPage
  ]
})
export class ContactPageModule {}
