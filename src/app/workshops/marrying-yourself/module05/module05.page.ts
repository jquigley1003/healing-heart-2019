import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { YoutubePlayerWeb } from 'capacitor-youtube-player'; // Web version

@Component({
  selector: 'app-module05',
  templateUrl: './module05.page.html',
  styleUrls: ['./module05.page.scss'],
})
export class Module05Page implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('introductionAudio') introductionAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('practice05Audio') practice05AudioRef: ElementRef<HTMLAudioElement>;

  completedModule: boolean;
  showCompleteBtn: boolean;
  showIncompleteBtn = true;
  audioDuration501: number;
  audioDuration502: number;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.initializeYoutubePlayerPluginWeb();
    this.introductionAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration501 = this.introductionAudioRef.nativeElement.duration;
    };
    this.practice05AudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration502 = this.practice05AudioRef.nativeElement.duration;
    };
  }

  async initializeYoutubePlayerPluginWeb() {
    const player1 = {playerId: 'youtube-player5-1', playerSize: {width: 640, height: 360}, videoId: 'GWIhP1_75p4'};
    const result1 = await YoutubePlayerWeb.initialize(player1);
    const player2 = {playerId: 'youtube-player5-2', playerSize: {width: 640, height: 360}, videoId: 'aeKYip-sBjM'};
    const result2 = await YoutubePlayerWeb.initialize(player2);
  }

  async destroyYoutubePlayerPluginWeb() {
    const result1 = await YoutubePlayerWeb.destroy('youtube-player5-1');
    const result2 = await YoutubePlayerWeb.destroy('youtube-player5-2');
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
