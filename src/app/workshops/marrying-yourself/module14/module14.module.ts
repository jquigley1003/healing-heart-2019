import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Module14PageRoutingModule } from './module14-routing.module';

import { Module14Page } from './module14.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Module14PageRoutingModule
  ],
  declarations: [Module14Page]
})
export class Module14PageModule {}
