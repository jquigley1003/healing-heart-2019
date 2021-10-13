import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Module02PageRoutingModule } from './module02-routing.module';

import { Module02Page } from './module02.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Module02PageRoutingModule
  ],
  declarations: [Module02Page]
})
export class Module02PageModule {}
