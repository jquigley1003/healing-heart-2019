import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Module18PageRoutingModule } from './module18-routing.module';

import { Module18Page } from './module18.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Module18PageRoutingModule
  ],
  declarations: [Module18Page]
})
export class Module18PageModule {}
