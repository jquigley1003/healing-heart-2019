import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Module01PageRoutingModule } from './module01-routing.module';
import { Module01Page } from './module01.page';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Module01PageRoutingModule,
    SwiperModule
  ],
  declarations: [Module01Page]
})
export class Module01PageModule {}
