import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Module10PageRoutingModule } from './module10-routing.module';

import { Module10Page } from './module10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Module10PageRoutingModule
  ],
  declarations: [Module10Page]
})
export class Module10PageModule {}
