import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TheSummitPageRoutingModule } from './the-summit-routing.module';

import { TheSummitPage } from './the-summit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TheSummitPageRoutingModule
  ],
  declarations: [TheSummitPage]
})
export class TheSummitPageModule {}
