import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-module04',
  templateUrl: './module04.page.html',
  styleUrls: ['./module04.page.scss'],
})
export class Module04Page implements OnInit, AfterViewInit {
  @ViewChild('selfForgivenessAudio') selfForgivenessAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('selfForgivenessAssignAudio') selfForgivenessAssignAudioRef: ElementRef<HTMLAudioElement>;

  completedModule: boolean;
  showCompleteBtn: boolean;
  showIncompleteBtn = true;
  assignment0401: boolean;
  assingment0402: boolean;
  assingment0403: boolean;
  assingment0404: boolean;
  assingment0405: boolean;
  assingment0406: boolean;
  assingment0407: boolean;
  audioDuration0401: number;
  audioDuration0402: number;

  constructor() { }

  ngOnInit() {
  }

  async ngAfterViewInit() {
    this.selfForgivenessAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0401 = this.selfForgivenessAudioRef.nativeElement.duration;
    };
    this.selfForgivenessAssignAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0402 = this.selfForgivenessAssignAudioRef.nativeElement.duration;
    };
  }

  markComplete() {
    this.showCompleteBtn = true;
    this.showIncompleteBtn = false;
  }

  markIncomplete() {
    this.showCompleteBtn = false;
    this.showIncompleteBtn = true;
  }
}
