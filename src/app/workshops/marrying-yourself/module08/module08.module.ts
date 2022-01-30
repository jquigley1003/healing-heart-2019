import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Module08PageRoutingModule } from './module08-routing.module';

import { Module08Page } from './module08.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Module08PageRoutingModule
  ],
  declarations: [Module08Page]
})
export class Module08PageModule {}
