import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Module16PageRoutingModule } from './module16-routing.module';

import { Module16Page } from './module16.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Module16PageRoutingModule
  ],
  declarations: [Module16Page]
})
export class Module16PageModule {}
