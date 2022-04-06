import { AfterViewInit, Component, ElementRef,OnInit, ViewChild } from '@angular/core';

import { YoutubePlayerWeb } from 'capacitor-youtube-player'; // Web version

@Component({
  selector: 'app-module06',
  templateUrl: './module06.page.html',
  styleUrls: ['./module06.page.scss'],
})
export class Module06Page implements OnInit, AfterViewInit {
  @ViewChild('introductionAudio') introductionAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('practice05Audio') practice05AudioRef: ElementRef<HTMLAudioElement>;

  completedModule: boolean;
  showCompleteBtn: boolean;
  showIncompleteBtn = true;
  audioDuration0601: number;
  audioDuration0602: number;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.initializeYoutubePlayerPluginWeb();
    this.introductionAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0601 = this.introductionAudioRef.nativeElement.duration;
    };
    this.practice05AudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0602 = this.practice05AudioRef.nativeElement.duration;
    };
  }

  async initializeYoutubePlayerPluginWeb() {
    const player1 = {playerId: 'youtube-player0601', playerSize: {width: 640, height: 360}, videoId: 'GWIhP1_75p4'};
    const result1 = await YoutubePlayerWeb.initialize(player1);
    const player2 = {playerId: 'youtube-player0602', playerSize: {width: 640, height: 360}, videoId: 'aeKYip-sBjM'};
    const result2 = await YoutubePlayerWeb.initialize(player2);
  }

  async destroyYoutubePlayerPluginWeb() {
    const result1 = await YoutubePlayerWeb.destroy('youtube-player0601');
    const result2 = await YoutubePlayerWeb.destroy('youtube-player0602');
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
