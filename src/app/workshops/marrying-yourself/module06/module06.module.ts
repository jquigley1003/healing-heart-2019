import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Module06PageRoutingModule } from './module06-routing.module';

import { Module06Page } from './module06.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Module06PageRoutingModule
  ],
  declarations: [Module06Page]
})
export class Module06PageModule {}
