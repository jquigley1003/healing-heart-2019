import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { YoutubePlayerWeb } from 'capacitor-youtube-player'; // Web version
import Player from '@vimeo/player';

@Component({
  selector: 'app-module07',
  templateUrl: './module07.page.html',
  styleUrls: ['./module07.page.scss'],
})
export class Module07Page implements OnInit {
  @ViewChild('introModule07Audio') introModule07AudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('innerWorkAudio') innerWorkAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('horizontalVerticalAudio') horizontalVerticalAudioRef: ElementRef<HTMLAudioElement>;
  // @ViewChild('alphaMindAudio') alphaMindAudioRef: ElementRef<HTMLAudioElement>;
  // @ViewChild('transformingMindAudio') transformingMindAudioRef: ElementRef<HTMLAudioElement>;
  // @ViewChild('practiceTamingMindAudio') practiceTamingMindAudioRef: ElementRef<HTMLAudioElement>;
  // @ViewChild('embracingYourHeartAudio') embracingYourHeartAudioRef: ElementRef<HTMLAudioElement>;
  // @ViewChild('guidedImageryHeartAudio') guidedImageryHeartAudioRef: ElementRef<HTMLAudioElement>;
  // @ViewChild('practiceEmbracingHeartAudio') practiceEmbracingHeartAudioRef: ElementRef<HTMLAudioElement>;
  // @ViewChild('lovingYourBodyAudio') lovingYourBodyAudioRef: ElementRef<HTMLAudioElement>;
  // @ViewChild('practiceLovingYourBodyAudio') practiceLovingYourBodyAudioRef: ElementRef<HTMLAudioElement>;
  // @ViewChild('nourishYourSoulAudio') nourishYourSoulAudioRef: ElementRef<HTMLAudioElement>;
  // @ViewChild('practiceNourishSoulAudio') practiceNourishSoulAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('sonataVimeo') sonataVimeoRef: ElementRef;


  completedModule: boolean;
  showCompleteBtn: boolean;
  showIncompleteBtn = true;
  audioDuration701: number;
  audioDuration702: number;
  audioDuration703: number;
  audioDuration604: number;
  audioDuration605: number;
  audioDuration606: number;
  audioDuration607: number;
  audioDuration608: number;
  audioDuration609: number;
  audioDuration610: number;
  audioDuration611: number;
  audioDuration612: number;
  audioDuration613: number;
  sonataVimeoPlayer: Player;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.initializeYoutubePlayerPluginWeb();
    this.introModule07AudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration701 = this.introModule07AudioRef.nativeElement.duration;
    };
    this.innerWorkAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration702 = this.innerWorkAudioRef.nativeElement.duration;
    };
    this.horizontalVerticalAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration703 = this.horizontalVerticalAudioRef.nativeElement.duration;
    };
    // this.alphaMindAudioRef.nativeElement.onloadedmetadata = (event) => {
    //   this.audioDuration704 = this.alphaMindAudioRef.nativeElement.duration;
    // };
    // this.transformingMindAudioRef.nativeElement.onloadedmetadata = (event) => {
    //   this.audioDuration705 = this.transformingMindAudioRef.nativeElement.duration;
    // };
    // this.practiceTamingMindAudioRef.nativeElement.onloadedmetadata = (event) => {
    //   this.audioDuration706 = this.practiceTamingMindAudioRef.nativeElement.duration;
    // };
    // this.embracingYourHeartAudioRef.nativeElement.onloadedmetadata = (event) => {
    //   this.audioDuration607 = this.embracingYourHeartAudioRef.nativeElement.duration;
    // };
    // this.guidedImageryHeartAudioRef.nativeElement.onloadedmetadata = (event) => {
    //   this.audioDuration608 = this.guidedImageryHeartAudioRef.nativeElement.duration;
    // };
    // this.practiceEmbracingHeartAudioRef.nativeElement.onloadedmetadata = (event) => {
    //   this.audioDuration609 = this.practiceEmbracingHeartAudioRef.nativeElement.duration;
    // };
    // this.lovingYourBodyAudioRef.nativeElement.onloadedmetadata = (event) => {
    //   this.audioDuration610 = this.lovingYourBodyAudioRef.nativeElement.duration;
    // };
    // this.practiceLovingYourBodyAudioRef.nativeElement.onloadedmetadata = (event) => {
    //   this.audioDuration611 = this.practiceLovingYourBodyAudioRef.nativeElement.duration;
    // };
    // this.nourishYourSoulAudioRef.nativeElement.onloadedmetadata = (event) => {
    //   this.audioDuration612 = this.nourishYourSoulAudioRef.nativeElement.duration;
    // };
    // this.practiceNourishSoulAudioRef.nativeElement.onloadedmetadata = (event) => {
    //   this.audioDuration613 = this.practiceNourishSoulAudioRef.nativeElement.duration;
    // };
    this.sonataVimeoPlayer = new Player(this.sonataVimeoRef.nativeElement, {
      id: 670040962,
      height: 350
    });
  }

  async initializeYoutubePlayerPluginWeb() {
    const player1 = {playerId: 'youtube-player0701', playerSize: {width: 640, height: 360}, videoId: 'Xn676-fLq7I'};
    const result1 = await YoutubePlayerWeb.initialize(player1);
    const player2 = {playerId: 'youtube-player0702', playerSize: {width: 640, height: 360}, videoId: 'QUQsqBqxoR4'};
    const result2 = await YoutubePlayerWeb.initialize(player2);
    const player3 = {playerId: 'youtube-player0703', playerSize: {width: 640, height: 360}, videoId: 'QfpXSa3Au6I'};
    const result3 = await YoutubePlayerWeb.initialize(player3);
    const player4 = {playerId: 'youtube-player0704', playerSize: {width: 640, height: 360}, videoId: '6K6_Rkrq4U0'};
    const result4 = await YoutubePlayerWeb.initialize(player4);
    const player5 = {playerId: 'youtube-player0705', playerSize: {width: 640, height: 360}, videoId: 'gEv-lfi6vY0'};
    const result5 = await YoutubePlayerWeb.initialize(player5);
    const player6 = {playerId: 'youtube-player0706', playerSize: {width: 640, height: 360}, videoId: 'ynVTqHYg5A4'};
    const result6 = await YoutubePlayerWeb.initialize(player6);
    const player7 = {playerId: 'youtube-player0707', playerSize: {width: 640, height: 360}, videoId: 'D4HxOinvaos'};
    const result7 = await YoutubePlayerWeb.initialize(player7);
    // const player8 = {playerId: 'youtube-player0608', playerSize: {width: 640, height: 360}, videoId: 'bK3BJD67OBA'};
    // const result8 = await YoutubePlayerWeb.initialize(player8);
    // const player9 = {playerId: 'youtube-player0609', playerSize: {width: 640, height: 360}, videoId: '2qY_fncNoSI'};
    // const result9 = await YoutubePlayerWeb.initialize(player9);
    // const player10 = {playerId: 'youtube-player0610', playerSize: {width: 640, height: 360}, videoId: '6I2RGEkFIFc'};
    // const result10 = await YoutubePlayerWeb.initialize(player10);
    // const player11 = {playerId: 'youtube-player0611', playerSize: {width: 640, height: 360}, videoId: 'rhA94ozSUD0'};
    // const result11 = await YoutubePlayerWeb.initialize(player11);
    // const player12 = {playerId: 'youtube-player0612', playerSize: {width: 640, height: 360}, videoId: 'eAfyFTzZDMM'};
    // const result12 = await YoutubePlayerWeb.initialize(player12);
    // const player13 = {playerId: 'youtube-player0613', playerSize: {width: 640, height: 360}, videoId: 'AEVC-IRdxZY'};
    // const result13 = await YoutubePlayerWeb.initialize(player13);
    // const player14 = {playerId: 'youtube-player0614', playerSize: {width: 640, height: 360}, videoId: 'MWASeaYuHZo'};
    // const result14 = await YoutubePlayerWeb.initialize(player14);
    // const player15 = {playerId: 'youtube-player0615', playerSize: {width: 640, height: 360}, videoId: 'Mq86e4Fhja0'};
    // const result15 = await YoutubePlayerWeb.initialize(player15);
    // const player16 = {playerId: 'youtube-player0616', playerSize: {width: 640, height: 360}, videoId: 'WfEhyi8N__Q'};
    // const result16 = await YoutubePlayerWeb.initialize(player16);
    // const player17 = {playerId: 'youtube-player0617', playerSize: {width: 640, height: 360}, videoId: 'VRNS8XTADEU'};
    // const result17 = await YoutubePlayerWeb.initialize(player17);
  }

  async destroyYoutubePlayerPluginWeb() {
    const result1 = await YoutubePlayerWeb.destroy('youtube-player0701');
    const result2 = await YoutubePlayerWeb.destroy('youtube-player0702');
    const result3 = await YoutubePlayerWeb.destroy('youtube-player0703');
    const result4 = await YoutubePlayerWeb.destroy('youtube-player0704');
    const result5 = await YoutubePlayerWeb.destroy('youtube-player0705');
    const result6 = await YoutubePlayerWeb.destroy('youtube-player0706');
    const result7 = await YoutubePlayerWeb.destroy('youtube-player0707');
    // const result8 = await YoutubePlayerWeb.destroy('youtube-player0608');
    // const result9 = await YoutubePlayerWeb.destroy('youtube-player0609');
    // const result10 = await YoutubePlayerWeb.destroy('youtube-player0610');
    // const result11 = await YoutubePlayerWeb.destroy('youtube-player0611');
    // const result12 = await YoutubePlayerWeb.destroy('youtube-player0612');
    // const result13 = await YoutubePlayerWeb.destroy('youtube-player0613');
    // const result14 = await YoutubePlayerWeb.destroy('youtube-player0614');
    // const result15 = await YoutubePlayerWeb.destroy('youtube-player0615');
    // const result16 = await YoutubePlayerWeb.destroy('youtube-player0616');
    // const result17 = await YoutubePlayerWeb.destroy('youtube-player0617');
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
