import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Module17PageRoutingModule } from './module17-routing.module';

import { Module17Page } from './module17.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Module17PageRoutingModule
  ],
  declarations: [Module17Page]
})
export class Module17PageModule {}
