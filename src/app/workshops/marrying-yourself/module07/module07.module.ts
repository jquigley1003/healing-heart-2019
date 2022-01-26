import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Module07PageRoutingModule } from './module07-routing.module';

import { Module07Page } from './module07.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Module07PageRoutingModule
  ],
  declarations: [Module07Page]
})
export class Module07PageModule {}
