import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsletterModalComponent } from '../newsletter-modal/newsletter-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [
    NewsletterModalComponent
  ],
  entryComponents: [
    NewsletterModalComponent
  ]
})
export class SharedModalsModule {}