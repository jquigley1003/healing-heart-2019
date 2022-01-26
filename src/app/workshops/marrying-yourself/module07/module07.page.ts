import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { YoutubePlayerWeb } from 'capacitor-youtube-player'; // Web version
import Player from '@vimeo/player';

@Component({
  selector: 'app-module07',
  templateUrl: './module07.page.html',
  styleUrls: ['./module07.page.scss'],
})
export class Module07Page implements OnInit {
  @ViewChild('introModule06Audio') introModule06AudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('tamingYourMindAudio') tamingYourMindAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('howToTameYourMindAudio') howToTameYourMindAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('alphaMindAudio') alphaMindAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('transformingMindAudio') transformingMindAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('practiceTamingMindAudio') practiceTamingMindAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('embracingYourHeartAudio') embracingYourHeartAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('guidedImageryHeartAudio') guidedImageryHeartAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('practiceEmbracingHeartAudio') practiceEmbracingHeartAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('lovingYourBodyAudio') lovingYourBodyAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('practiceLovingYourBodyAudio') practiceLovingYourBodyAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('nourishYourSoulAudio') nourishYourSoulAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('practiceNourishSoulAudio') practiceNourishSoulAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('dassyVimeo') dassyVimeoRef: ElementRef;


  completedModule: boolean;
  showCompleteBtn: boolean;
  showIncompleteBtn = true;
  audioDuration601: number;
  audioDuration602: number;
  audioDuration603: number;
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
  dassyVimeoPlayer: Player;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.initializeYoutubePlayerPluginWeb();
    this.introModule06AudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration601 = this.introModule06AudioRef.nativeElement.duration;
    };
    this.tamingYourMindAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration602 = this.tamingYourMindAudioRef.nativeElement.duration;
    };
    this.howToTameYourMindAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration603 = this.howToTameYourMindAudioRef.nativeElement.duration;
    };
    this.alphaMindAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration604 = this.alphaMindAudioRef.nativeElement.duration;
    };
    this.transformingMindAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration605 = this.transformingMindAudioRef.nativeElement.duration;
    };
    this.practiceTamingMindAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration606 = this.practiceTamingMindAudioRef.nativeElement.duration;
    };
    this.embracingYourHeartAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration607 = this.embracingYourHeartAudioRef.nativeElement.duration;
    };
    this.guidedImageryHeartAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration608 = this.guidedImageryHeartAudioRef.nativeElement.duration;
    };
    this.practiceEmbracingHeartAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration609 = this.practiceEmbracingHeartAudioRef.nativeElement.duration;
    };
    this.lovingYourBodyAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration610 = this.lovingYourBodyAudioRef.nativeElement.duration;
    };
    this.practiceLovingYourBodyAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration611 = this.practiceLovingYourBodyAudioRef.nativeElement.duration;
    };
    this.nourishYourSoulAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration612 = this.nourishYourSoulAudioRef.nativeElement.duration;
    };
    this.practiceNourishSoulAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration613 = this.practiceNourishSoulAudioRef.nativeElement.duration;
    };
    this.dassyVimeoPlayer = new Player(this.dassyVimeoRef.nativeElement, {
      id: 652064411,
      height: 350
    });
  }

  async initializeYoutubePlayerPluginWeb() {
    const player2 = {playerId: 'youtube-player0602', playerSize: {width: 640, height: 360}, videoId: '-jc8tacP520'};
    const result2 = await YoutubePlayerWeb.initialize(player2);
    const player3 = {playerId: 'youtube-player0603', playerSize: {width: 640, height: 360}, videoId: 'k4F7dzyGqnE'};
    const result3 = await YoutubePlayerWeb.initialize(player3);
    const player4 = {playerId: 'youtube-player0604', playerSize: {width: 640, height: 360}, videoId: 'z5PymkMh0bo'};
    const result4 = await YoutubePlayerWeb.initialize(player4);
    const player5 = {playerId: 'youtube-player0605', playerSize: {width: 640, height: 360}, videoId: 'gEv-lfi6vY0'};
    const result5 = await YoutubePlayerWeb.initialize(player5);
    const player6 = {playerId: 'youtube-player0606', playerSize: {width: 640, height: 360}, videoId: 'EHw170UPsyk'};
    const result6 = await YoutubePlayerWeb.initialize(player6);
    const player7 = {playerId: 'youtube-player0607', playerSize: {width: 640, height: 360}, videoId: 'ynVTqHYg5A4'};
    const result7 = await YoutubePlayerWeb.initialize(player7);
    const player8 = {playerId: 'youtube-player0608', playerSize: {width: 640, height: 360}, videoId: 'bK3BJD67OBA'};
    const result8 = await YoutubePlayerWeb.initialize(player8);
    const player9 = {playerId: 'youtube-player0609', playerSize: {width: 640, height: 360}, videoId: '2qY_fncNoSI'};
    const result9 = await YoutubePlayerWeb.initialize(player9);
    const player10 = {playerId: 'youtube-player0610', playerSize: {width: 640, height: 360}, videoId: '6I2RGEkFIFc'};
    const result10 = await YoutubePlayerWeb.initialize(player10);
    const player11 = {playerId: 'youtube-player0611', playerSize: {width: 640, height: 360}, videoId: 'rhA94ozSUD0'};
    const result11 = await YoutubePlayerWeb.initialize(player11);
    const player12 = {playerId: 'youtube-player0612', playerSize: {width: 640, height: 360}, videoId: 'eAfyFTzZDMM'};
    const result12 = await YoutubePlayerWeb.initialize(player12);
    const player13 = {playerId: 'youtube-player0613', playerSize: {width: 640, height: 360}, videoId: 'AEVC-IRdxZY'};
    const result13 = await YoutubePlayerWeb.initialize(player13);
    const player14 = {playerId: 'youtube-player0614', playerSize: {width: 640, height: 360}, videoId: 'MWASeaYuHZo'};
    const result14 = await YoutubePlayerWeb.initialize(player14);
    const player15 = {playerId: 'youtube-player0615', playerSize: {width: 640, height: 360}, videoId: 'Mq86e4Fhja0'};
    const result15 = await YoutubePlayerWeb.initialize(player15);
    const player16 = {playerId: 'youtube-player0616', playerSize: {width: 640, height: 360}, videoId: 'WfEhyi8N__Q'};
    const result16 = await YoutubePlayerWeb.initialize(player16);
    const player17 = {playerId: 'youtube-player0617', playerSize: {width: 640, height: 360}, videoId: 'VRNS8XTADEU'};
    const result17 = await YoutubePlayerWeb.initialize(player17);
  }

  async destroyYoutubePlayerPluginWeb() {
    const result2 = await YoutubePlayerWeb.destroy('youtube-player0602');
    const result3 = await YoutubePlayerWeb.destroy('youtube-player0603');
    const result4 = await YoutubePlayerWeb.destroy('youtube-player0604');
    const result5 = await YoutubePlayerWeb.destroy('youtube-player0605');
    const result6 = await YoutubePlayerWeb.destroy('youtube-player0606');
    const result7 = await YoutubePlayerWeb.destroy('youtube-player0607');
    const result8 = await YoutubePlayerWeb.destroy('youtube-player0608');
    const result9 = await YoutubePlayerWeb.destroy('youtube-player0609');
    const result10 = await YoutubePlayerWeb.destroy('youtube-player0610');
    const result11 = await YoutubePlayerWeb.destroy('youtube-player0611');
    const result12 = await YoutubePlayerWeb.destroy('youtube-player0612');
    const result13 = await YoutubePlayerWeb.destroy('youtube-player0613');
    const result14 = await YoutubePlayerWeb.destroy('youtube-player0614');
    const result15 = await YoutubePlayerWeb.destroy('youtube-player0615');
    const result16 = await YoutubePlayerWeb.destroy('youtube-player0616');
    const result17 = await YoutubePlayerWeb.destroy('youtube-player0617');
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
