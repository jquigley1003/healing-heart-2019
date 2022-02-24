import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TributeToDonnaPageRoutingModule } from './tribute-to-donna-routing.module';

import { TributeToDonnaPage } from './tribute-to-donna.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TributeToDonnaPageRoutingModule
  ],
  declarations: [TributeToDonnaPage]
})
export class TributeToDonnaPageModule {}
