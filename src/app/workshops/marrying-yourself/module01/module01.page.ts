import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { YoutubePlayerWeb } from 'capacitor-youtube-player'; // Web version
import SwiperCore, { SwiperOptions, EffectCube } from 'swiper';
SwiperCore.use([EffectCube]);
@Component({
  selector: 'app-module01',
  templateUrl: './module01.page.html',
  styleUrls: ['./module01.page.scss'],
})
export class Module01Page implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('welcomingAudio') welcomingAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('everyoneAudio') everyoneAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('connectedAudio') connectedAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('revelAudio') revelAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('beginningAudio') beginningAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('mudraAudio') mudraAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('practices01Audio') practices01AudioRef: ElementRef<HTMLAudioElement>;

  config: SwiperOptions = {
    pagination: true,
    effect: 'cube',
  }

  completedModule: boolean;
  showCompleteBtn: boolean;
  showIncompleteBtn = true;
  audioDuration01: number;
  audioDuration02: number;
  audioDuration03: number;
  audioDuration04: number;
  audioDuration05: number;
  audioDuration06: number;
  audioDuration07: number;

  constructor() { }

  ngOnInit() {
  }

  async ngAfterViewInit() {
    this.initializeYoutubePlayerPluginWeb();
    this.welcomingAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration01 = this.welcomingAudioRef.nativeElement.duration;
    };
    this.everyoneAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration02 = this.everyoneAudioRef.nativeElement.duration;
    };
    this.connectedAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration03 = this.connectedAudioRef.nativeElement.duration;
    };
    this.revelAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration04 = this.revelAudioRef.nativeElement.duration;
    };
    this.beginningAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration05 = this.beginningAudioRef.nativeElement.duration;
    };
    this.mudraAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration06 = this.mudraAudioRef.nativeElement.duration;
    };
    this.practices01AudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration07 = this.practices01AudioRef.nativeElement.duration;
    };
  }


  async initializeYoutubePlayerPluginWeb() {
    const options1 = {playerId: 'youtube-player1', playerSize: {}, videoId: 'Dou2JUmogvU'};
    const result1 = await YoutubePlayerWeb.initialize(options1);
    const options2 = {playerId: 'youtube-player2', playerSize: {width: 640, height: 360}, videoId: 'aTq2cMQpPeY'};
    const result2 = await YoutubePlayerWeb.initialize(options2);
    const options3 = {playerId: 'youtube-player3', playerSize: {width: 640, height: 360}, videoId: 'HpvK9Af4aiA'};
    const result3 = await YoutubePlayerWeb.initialize(options3);
    const options4 = {playerId: 'youtube-player4', playerSize: {width: 640, height: 360}, videoId: 'P3fIZuW9P_M'};
    const result4 = await YoutubePlayerWeb.initialize(options4);
    const options5 = {playerId: 'youtube-player5', playerSize: {width: 640, height: 360}, videoId: 'GWIhP1_75p4'};
    const result5 = await YoutubePlayerWeb.initialize(options5);
    const options6 = {playerId: 'youtube-player6', playerSize: {width: 640, height: 360}, videoId: 'aeKYip-sBjM'};
    const result6 = await YoutubePlayerWeb.initialize(options6);
  }

  async destroyYoutubePlayerPluginWeb() {
    const result1 = await YoutubePlayerWeb.destroy('youtube-player1');
    const result2 = await YoutubePlayerWeb.destroy('youtube-player2');
    const result3 = await YoutubePlayerWeb.destroy('youtube-player3');
    const result4 = await YoutubePlayerWeb.destroy('youtube-player4');
    const result5 = await YoutubePlayerWeb.destroy('youtube-player5');
    const result6 = await YoutubePlayerWeb.destroy('youtube-player6');
    // console.log('destroyYoutubePlayer1', result1);
    // console.log('destroyYoutubePlayer2', result2);
    // console.log('destroyYoutubePlayer3', result3);
    // console.log('destroyYoutubePlayer4', result4);
    // console.log('destroyYoutubePlayer5', result5);
    // console.log('destroyYoutubePlayer6', result6);
    // console.log('destroyYoutubePlayer7', result7);
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
