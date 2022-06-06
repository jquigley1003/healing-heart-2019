import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { YoutubePlayerWeb } from 'capacitor-youtube-player'; // Web version
import Player from '@vimeo/player';

@Component({
  selector: 'app-module05',
  templateUrl: './module05.page.html',
  styleUrls: ['./module05.page.scss'],
})
export class Module05Page implements OnInit, AfterViewInit {
  @ViewChild('firstAudio') firstAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('principlesAudio') principlesAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('selfInquiryAudio') selfInquiryAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('engagementAudio') engagementAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('quoteAudio') quoteAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('dassyVimeo') dassyVimeoRef: ElementRef;
  @ViewChild('devaEngagementVimeo') devaEngagementVimeoRef: ElementRef;
  @ViewChild('bodyPostureVimeo') bodyPostureVimeoRef: ElementRef;

  completedModule: boolean;
  showCompleteBtn: boolean;
  showIncompleteBtn = true;
  audioDuration0501: number;
  audioDuration0502: number;
  audioDuration0503: number;
  audioDuration0504: number;
  audioDuration0505: number;
  dassyVimeoPlayer: Player;
  devaEngagementVimeoPlayer: Player;
  bodyPostureVimeoPlayer: Player;
  

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.initializeYoutubePlayerPluginWeb();
    this.initializeVimeoPlayer();
    this.firstAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0501 = this.firstAudioRef.nativeElement.duration;
    };
    this.principlesAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0502 = this.principlesAudioRef.nativeElement.duration;
    };
    this.selfInquiryAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0503 = this.selfInquiryAudioRef.nativeElement.duration;
    };
    this.engagementAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0504 = this.engagementAudioRef.nativeElement.duration;
    };
    this.quoteAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0505 = this.quoteAudioRef.nativeElement.duration;
    };
  }

  async initializeYoutubePlayerPluginWeb() {
    const player1 = {playerId: 'youtube-player0501', playerSize: {width: 640, height: 360}, videoId: 'bMpFmHSgC4Q'};
    const result1 = await YoutubePlayerWeb.initialize(player1);
    const player2 = {playerId: 'youtube-player0502', playerSize: {width: 640, height: 360}, videoId: 'LBk5I4nSXBo'};
    const result2 = await YoutubePlayerWeb.initialize(player2);
    const player3 = {playerId: 'youtube-player0503', playerSize: {width: 640, height: 360}, videoId: 'aeKYip-sBjM'};
    const result3 = await YoutubePlayerWeb.initialize(player3);
  }

  async initializeVimeoPlayer() {
    this.dassyVimeoPlayer = new Player(this.dassyVimeoRef.nativeElement, {
      id: 652064411,
      height: 350
    });
    this.devaEngagementVimeoPlayer = new Player(this.devaEngagementVimeoRef.nativeElement, {
      id: 652593403,
      height: 350
    });
    this.bodyPostureVimeoPlayer = new Player(this.bodyPostureVimeoRef.nativeElement, {
      id: 652065275,
      height: 350
    });
  }

  async destroyYoutubePlayerPluginWeb() {
    const result1 = await YoutubePlayerWeb.destroy('youtube-player0501');
    const result2 = await YoutubePlayerWeb.destroy('youtube-player0502');
    const result3 = await YoutubePlayerWeb.destroy('youtube-player0503');
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

  ionViewWillLeave() {
    this.destroyYoutubePlayerPluginWeb();
  }

  ionViewDidEnter() {
    this.initializeYoutubePlayerPluginWeb();
    // gsap.set(".dark", {opacity:1});
    // gsap.set(".title", {scale:1});
    // if(this.tl1 != null) {
    //   this.tl1.restart();
    // }
  }
}
