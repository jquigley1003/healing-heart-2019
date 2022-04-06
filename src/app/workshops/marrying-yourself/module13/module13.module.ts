import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Module13PageRoutingModule } from './module13-routing.module';

import { Module13Page } from './module13.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Module13PageRoutingModule
  ],
  declarations: [Module13Page]
})
export class Module13PageModule {}
