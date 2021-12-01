import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { YoutubePlayerWeb } from 'capacitor-youtube-player'; // Web version
import Player from '@vimeo/player';

@Component({
  selector: 'app-module04',
  templateUrl: './module04.page.html',
  styleUrls: ['./module04.page.scss'],
})
export class Module04Page implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('firstAudio') firstAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('principlesAudio') principlesAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('selfInquiryAudio') selfInquiryAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('engagementAudio') engagementAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('quoteAudio') quoteAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('dassyVimeo') dassyVimeoRef: ElementRef;
  @ViewChild('devaEngagementVimeo') devaEngagementVimeoRef: ElementRef;

  completedModule: boolean;
  showCompleteBtn: boolean;
  showIncompleteBtn = true;
  audioDuration401: number;
  audioDuration402: number;
  audioDuration403: number;
  audioDuration404: number;
  audioDuration405: number;
  dassyVimeoPlayer: Player;
  devaEngagementVimeoPlayer: Player;
  

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
    this.selfInquiryAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration403 = this.selfInquiryAudioRef.nativeElement.duration;
    };
    this.engagementAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration404 = this.engagementAudioRef.nativeElement.duration;
    };
    this.quoteAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration405 = this.quoteAudioRef.nativeElement.duration;
    };
    this.dassyVimeoPlayer = new Player(this.dassyVimeoRef.nativeElement, {
      id: 652064411,
      height: 350
    });
    this.devaEngagementVimeoPlayer = new Player(this.devaEngagementVimeoRef.nativeElement, {
      id: 652065200,
      height: 350
    });
  }

  async initializeYoutubePlayerPluginWeb() {
    const player1 = {playerId: 'youtube-player4-1', playerSize: {width: 640, height: 360}, videoId: 'bMpFmHSgC4Q'};
    const result1 = await YoutubePlayerWeb.initialize(player1);
    const player2 = {playerId: 'youtube-player4-2', playerSize: {width: 640, height: 360}, videoId: 'LBk5I4nSXBo'};
    const result2 = await YoutubePlayerWeb.initialize(player2);
    const player3 = {playerId: 'youtube-player4-3', playerSize: {width: 640, height: 360}, videoId: 'aeKYip-sBjM'};
    const result3 = await YoutubePlayerWeb.initialize(player3);
  }

  async destroyYoutubePlayerPluginWeb() {
    const result1 = await YoutubePlayerWeb.destroy('youtube-player4-1');
    const result2 = await YoutubePlayerWeb.destroy('youtube-player4-2');
    const result3 = await YoutubePlayerWeb.destroy('youtube-player4-3');
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
