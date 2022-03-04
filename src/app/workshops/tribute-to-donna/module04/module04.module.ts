import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Module04PageRoutingModule } from './module04-routing.module';

import { Module04Page } from './module04.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Module04PageRoutingModule
  ],
  declarations: [Module04Page]
})
export class Module04PageModule {}
