import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Module12PageRoutingModule } from './module12-routing.module';

import { Module12Page } from './module12.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Module12PageRoutingModule
  ],
  declarations: [Module12Page]
})
export class Module12PageModule {}
