import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Module15PageRoutingModule } from './module15-routing.module';

import { Module15Page } from './module15.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Module15PageRoutingModule
  ],
  declarations: [Module15Page]
})
export class Module15PageModule {}
