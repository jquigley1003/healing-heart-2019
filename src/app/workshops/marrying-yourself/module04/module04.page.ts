import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { YoutubePlayerWeb } from 'capacitor-youtube-player'; // Web version

@Component({
  selector: 'app-module04',
  templateUrl: './module04.page.html',
  styleUrls: ['./module04.page.scss'],
})
export class Module04Page implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('firstAudio') firstAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('principlesAudio') principlesAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('practice04Audio') practice04AudioRef: ElementRef<HTMLAudioElement>;

  completedModule: boolean;
  showCompleteBtn: boolean;
  showIncompleteBtn = true;
  audioDuration401: number;
  audioDuration402: number;
  audioDuration403: number

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.initializeYoutubePlayerPluginWeb();
    this.firstAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration401 = this.firstAudioRef.nativeElement.duration;
    };
    this.principlesAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration402 = this.principlesAudioRef.nativeElement.duration;
    };
    this.practice04AudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration403 = this.practice04AudioRef.nativeElement.duration;
    };
  }

  async initializeYoutubePlayerPluginWeb() {
    const player1 = {playerId: 'youtube-player4-1', playerSize: {width: 640, height: 360}, videoId: 'bMpFmHSgC4Q'};
    const result1 = await YoutubePlayerWeb.initialize(player1);
  }

  async destroyYoutubePlayerPluginWeb() {
    const result1 = await YoutubePlayerWeb.destroy('youtube-player3-1');
  }

  onToggle() {
    console.log('completed is: ',this.completedModule);
  }

  markComplete() {
    this.showCompleteBtn = true;
    this.showIncompleteBtn = false;
  }

  markIncomplete() {
    this.showCompleteBtn = false;
    this.showIncompleteBtn = true;
  }

  ngOnDestroy() {
    this.destroyYoutubePlayerPluginWeb();
  }
}
