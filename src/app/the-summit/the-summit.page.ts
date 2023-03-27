import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ToastService } from 'src/app/shared/notify/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-the-summit',
  templateUrl: './the-summit.page.html',
  styleUrls: ['./the-summit.page.scss'],
})
export class TheSummitPage implements OnInit, AfterViewInit {
  @ViewChild('onBeingAudio') onBeingAudioRef: ElementRef<HTMLAudioElement>;
  audioDuration01: number;

  constructor(
    private toastService: ToastService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.onBeingAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration01 = this.onBeingAudioRef.nativeElement.duration;
    };
  }

}
