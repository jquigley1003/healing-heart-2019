import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { YoutubePlayerWeb } from 'capacitor-youtube-player'; // Web version

@Component({
  selector: 'app-module03',
  templateUrl: './module03.page.html',
  styleUrls: ['./module03.page.scss'],
})
export class Module03Page implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('onBeingAudio') onBeingAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('practice03Audio') practice03AudioRef: ElementRef<HTMLAudioElement>;

  completedModule: boolean;
  showCompleteBtn: boolean;
  showIncompleteBtn = true;
  audioDuration301: number;
  audioDuration302: number;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.initializeYoutubePlayerPluginWeb();
    this.onBeingAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration301 = this.onBeingAudioRef.nativeElement.duration;
    };
    this.practice03AudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration302 = this.practice03AudioRef.nativeElement.duration;
    };
  }

  async initializeYoutubePlayerPluginWeb() {
    const player1 = {playerId: 'youtube-player3-1', playerSize: {width: 640, height: 360}, videoId: 'XLFEvHWD_NE'};
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
