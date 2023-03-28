import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ToastService } from 'src/app/shared/notify/toast.service';
import { Router } from '@angular/router';
import { SummitModalComponent } from '../shared/modal/summit-modal/summit-modal.component';

@Component({
  selector: 'app-the-summit',
  templateUrl: './the-summit.page.html',
  styleUrls: ['./the-summit.page.scss'],
})
export class TheSummitPage implements OnInit, AfterViewInit {
  @ViewChild('onBeingAudio') onBeingAudioRef: ElementRef<HTMLAudioElement>;
  @HostListener('window:popstate', ['$event'])
  onPopState(event) {
    window.location.reload();
    console.log('Back button pressed');
  }
  
  audioDuration01: number;

  constructor(
    private toastService: ToastService,
    private modalCtrl: ModalController,
    private router: Router
  ) { }

  ngOnInit() {
    this.presentSummitModal();
  }

  ngAfterViewInit(): void {
    this.onBeingAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration01 = this.onBeingAudioRef.nativeElement.duration;
    };
  }

  async presentSummitModal() {
    const modal = await this.modalCtrl.create({
      component: SummitModalComponent,
      componentProps: {},
      cssClass: 'modal-fullscreen'
    });
    return await modal.present();
  }
}
