import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MarryingYourselfPageRoutingModule } from './marrying-yourself-routing.module';
import { MarryingYourselfPage } from './marrying-yourself.page';

const routes: Routes = [
  {
    path: '',
    component: MarryingYourselfPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarryingYourselfPageRoutingModule
  ],
  declarations: [MarryingYourselfPage]
})
export class MarryingYourselfPageModule {}
