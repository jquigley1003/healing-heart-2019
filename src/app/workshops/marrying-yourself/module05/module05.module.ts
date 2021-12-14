import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Module05PageRoutingModule } from './module05-routing.module';

import { Module05Page } from './module05.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Module05PageRoutingModule
  ],
  declarations: [Module05Page]
})
export class Module05PageModule {}
