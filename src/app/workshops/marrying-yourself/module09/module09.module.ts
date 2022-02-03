import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Module09PageRoutingModule } from './module09-routing.module';

import { Module09Page } from './module09.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Module09PageRoutingModule
  ],
  declarations: [Module09Page]
})
export class Module09PageModule {}
