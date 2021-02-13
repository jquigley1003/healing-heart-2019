import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { MySnowfallComponent } from './my-snowfall.component';


@NgModule({
  imports: [
    IonicModule,
    CommonModule
  ],
  declarations: [
    MySnowfallComponent
  ],
  exports: [
    MySnowfallComponent
  ]
})
export class MySnowfallModule { }