import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarryingYourselfIntroPageRoutingModule } from './marrying-yourself-intro-routing.module';

import { MarryingYourselfIntroPage } from './marrying-yourself-intro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarryingYourselfIntroPageRoutingModule
  ],
  declarations: [MarryingYourselfIntroPage]
})
export class MarryingYourselfIntroPageModule {}
