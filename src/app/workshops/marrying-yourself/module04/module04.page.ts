import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { YoutubePlayerWeb } from 'capacitor-youtube-player'; // Web version

@Component({
  selector: 'app-module04',
  templateUrl: './module04.page.html',
  styleUrls: ['./module04.page.scss'],
})
export class Module04Page implements OnInit, AfterViewInit {
  @ViewChild('onBeingAudio') onBeingAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('practice03Audio') practice03AudioRef: ElementRef<HTMLAudioElement>;

  completedModule: boolean;
  showCompleteBtn: boolean;
  showIncompleteBtn = true;
  audioDuration0401: number;
  audioDuration0402: number;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.initializeYoutubePlayerPluginWeb();
    this.onBeingAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0401 = this.onBeingAudioRef.nativeElement.duration;
    };
    this.practice03AudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0402 = this.practice03AudioRef.nativeElement.duration;
    };
  }

  async initializeYoutubePlayerPluginWeb() {
    const player1 = {playerId: 'youtube-player0401', playerSize: {width: 640, height: 360}, videoId: 'aWNupk1jn20'};
    const result1 = await YoutubePlayerWeb.initialize(player1);
    const player2 = {playerId: 'youtube-player0402', playerSize: {width: 640, height: 360}, videoId: 'XLFEvHWD_NE'};
    const result2 = await YoutubePlayerWeb.initialize(player2);
    const player3 = {playerId: 'youtube-player0403', playerSize: {width: 640, height: 360}, videoId: 'veEQQ-N9xWU'};
    const result3 = await YoutubePlayerWeb.initialize(player3);
  }

  async destroyYoutubePlayerPluginWeb() {
    const result1 = await YoutubePlayerWeb.destroy('youtube-player0401');
    const result2 = await YoutubePlayerWeb.destroy('youtube-player0402');
    const result3 = await YoutubePlayerWeb.destroy('youtube-player0303');
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
