import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Module11PageRoutingModule } from './module11-routing.module';

import { Module11Page } from './module11.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Module11PageRoutingModule
  ],
  declarations: [Module11Page]
})
export class Module11PageModule {}
