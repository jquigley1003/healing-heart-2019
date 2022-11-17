import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KetaminePageRoutingModule } from './ketamine-routing.module';

import { KetaminePage } from './ketamine.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KetaminePageRoutingModule
  ],
  declarations: [KetaminePage]
})
export class KetaminePageModule {}
