import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-module03',
  templateUrl: './module03.page.html',
  styleUrls: ['./module03.page.scss'],
})
export class Module03Page implements OnInit, AfterViewInit {
  @ViewChild('clarifyAudio') clarifyAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('communeWithMichaelAudio') communeWithMichaelAudioRef: ElementRef<HTMLAudioElement>;

  completedModule: boolean;
  showCompleteBtn: boolean;
  showIncompleteBtn = true;
  assingment0301: boolean;
  assingment0302: boolean;
  assingment0303: boolean;
  assingment0304: boolean;
  assingment0305: boolean;
  audioDuration0301: number;
  audioDuration0302: number;

  constructor() { }

  ngOnInit() {
  }

  async ngAfterViewInit() {
    this.clarifyAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0301 = this.clarifyAudioRef.nativeElement.duration;
    };
    this.communeWithMichaelAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0302 = this.communeWithMichaelAudioRef.nativeElement.duration;
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
