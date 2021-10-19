import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Module03PageRoutingModule } from './module03-routing.module';

import { Module03Page } from './module03.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Module03PageRoutingModule
  ],
  declarations: [Module03Page]
})
export class Module03PageModule {}
