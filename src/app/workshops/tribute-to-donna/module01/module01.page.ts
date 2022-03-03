import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-module01',
  templateUrl: './module01.page.html',
  styleUrls: ['./module01.page.scss'],
})
export class Module01Page implements OnInit {
  @ViewChild('weedOutButsAudio') weedOutButsAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('listTheButsAudio') listTheButsAudioRef: ElementRef<HTMLAudioElement>;

  completedModule: boolean;
  showCompleteBtn: boolean;
  showIncompleteBtn = true;
  assignment0101: boolean;
  assingment0102: boolean;
  assingment0103: boolean;
  assingment0104: boolean;
  assingment0105: boolean;
  assingment0106: boolean;
  assingment0107: boolean;
  assingment0108: boolean;
  assingment0109: boolean;
  assingment0110: boolean;
  audioDuration0101: number;
  audioDuration0102: number;
 

  constructor() { }

  ngOnInit() {
  }

  async ngAfterViewInit() {
    this.weedOutButsAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0101 = this.weedOutButsAudioRef.nativeElement.duration;
    };
    this.listTheButsAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0102 = this.listTheButsAudioRef.nativeElement.duration;
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
