import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { YoutubePlayerWeb } from 'capacitor-youtube-player'; // Web version

@Component({
  selector: 'app-module07',
  templateUrl: './module07.page.html',
  styleUrls: ['./module07.page.scss'],
})
export class Module07Page implements OnInit, AfterViewInit {
  @ViewChild('introModule07Audio') introModule07AudioRef: ElementRef<HTMLAudioElement>;
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


  completedModule: boolean;
  showCompleteBtn: boolean;
  showIncompleteBtn = true;
  audioDuration0701: number;
  audioDuration0702: number;
  audioDuration0703: number;
  audioDuration0704: number;
  audioDuration0705: number;
  audioDuration0706: number;
  audioDuration0707: number;
  audioDuration0708: number;
  audioDuration0709: number;
  audioDuration0710: number;
  audioDuration0711: number;
  audioDuration0712: number;
  audioDuration0713: number;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.initializeYoutubePlayerPluginWeb();
    this.introModule07AudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0701 = this.introModule07AudioRef.nativeElement.duration;
    };
    this.tamingYourMindAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0702 = this.tamingYourMindAudioRef.nativeElement.duration;
    };
    this.howToTameYourMindAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0703 = this.howToTameYourMindAudioRef.nativeElement.duration;
    };
    this.alphaMindAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0704 = this.alphaMindAudioRef.nativeElement.duration;
    };
    this.transformingMindAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0705 = this.transformingMindAudioRef.nativeElement.duration;
    };
    this.practiceTamingMindAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0706 = this.practiceTamingMindAudioRef.nativeElement.duration;
    };
    this.embracingYourHeartAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0707 = this.embracingYourHeartAudioRef.nativeElement.duration;
    };
    this.guidedImageryHeartAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0708 = this.guidedImageryHeartAudioRef.nativeElement.duration;
    };
    this.practiceEmbracingHeartAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0709 = this.practiceEmbracingHeartAudioRef.nativeElement.duration;
    };
    this.lovingYourBodyAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0710 = this.lovingYourBodyAudioRef.nativeElement.duration;
    };
    this.practiceLovingYourBodyAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0711 = this.practiceLovingYourBodyAudioRef.nativeElement.duration;
    };
    this.nourishYourSoulAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0712 = this.nourishYourSoulAudioRef.nativeElement.duration;
    };
    this.practiceNourishSoulAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0713 = this.practiceNourishSoulAudioRef.nativeElement.duration;
    };
  }

  async initializeYoutubePlayerPluginWeb() {
    const player2 = {playerId: 'youtube-player0702', playerSize: {width: 640, height: 360}, videoId: '-jc8tacP520'};
    const result2 = await YoutubePlayerWeb.initialize(player2);
    const player3 = {playerId: 'youtube-player0703', playerSize: {width: 640, height: 360}, videoId: 'k4F7dzyGqnE'};
    const result3 = await YoutubePlayerWeb.initialize(player3);
    const player4 = {playerId: 'youtube-player0704', playerSize: {width: 640, height: 360}, videoId: 'z5PymkMh0bo'};
    const result4 = await YoutubePlayerWeb.initialize(player4);
    const player5 = {playerId: 'youtube-player0705', playerSize: {width: 640, height: 360}, videoId: 'gEv-lfi6vY0'};
    const result5 = await YoutubePlayerWeb.initialize(player5);
    const player6 = {playerId: 'youtube-player0706', playerSize: {width: 640, height: 360}, videoId: 'EHw170UPsyk'};
    const result6 = await YoutubePlayerWeb.initialize(player6);
    const player7 = {playerId: 'youtube-player0707', playerSize: {width: 640, height: 360}, videoId: 'ynVTqHYg5A4'};
    const result7 = await YoutubePlayerWeb.initialize(player7);
    const player8 = {playerId: 'youtube-player0708', playerSize: {width: 640, height: 360}, videoId: 'bK3BJD67OBA'};
    const result8 = await YoutubePlayerWeb.initialize(player8);
    const player9 = {playerId: 'youtube-player0709', playerSize: {width: 640, height: 360}, videoId: '2qY_fncNoSI'};
    const result9 = await YoutubePlayerWeb.initialize(player9);
    const player10 = {playerId: 'youtube-player0710', playerSize: {width: 640, height: 360}, videoId: '6I2RGEkFIFc'};
    const result10 = await YoutubePlayerWeb.initialize(player10);
    const player11 = {playerId: 'youtube-player0711', playerSize: {width: 640, height: 360}, videoId: 'rhA94ozSUD0'};
    const result11 = await YoutubePlayerWeb.initialize(player11);
    const player12 = {playerId: 'youtube-player0712', playerSize: {width: 640, height: 360}, videoId: 'eAfyFTzZDMM'};
    const result12 = await YoutubePlayerWeb.initialize(player12);
    const player13 = {playerId: 'youtube-player0713', playerSize: {width: 640, height: 360}, videoId: 'AEVC-IRdxZY'};
    const result13 = await YoutubePlayerWeb.initialize(player13);
    const player14 = {playerId: 'youtube-player0714', playerSize: {width: 640, height: 360}, videoId: 'MWASeaYuHZo'};
    const result14 = await YoutubePlayerWeb.initialize(player14);
    const player15 = {playerId: 'youtube-player0715', playerSize: {width: 640, height: 360}, videoId: 'Mq86e4Fhja0'};
    const result15 = await YoutubePlayerWeb.initialize(player15);
    const player16 = {playerId: 'youtube-player0716', playerSize: {width: 640, height: 360}, videoId: 'WfEhyi8N__Q'};
    const result16 = await YoutubePlayerWeb.initialize(player16);
    const player17 = {playerId: 'youtube-player0717', playerSize: {width: 640, height: 360}, videoId: 'VRNS8XTADEU'};
    const result17 = await YoutubePlayerWeb.initialize(player17);
    const player18 = {playerId: 'youtube-player0718', playerSize: {width: 640, height: 360}, videoId: '3YHVC1DcHmo'};
    const result18 = await YoutubePlayerWeb.initialize(player18);
  }

  async destroyYoutubePlayerPluginWeb() {
    const result2 = await YoutubePlayerWeb.destroy('youtube-player0702');
    const result3 = await YoutubePlayerWeb.destroy('youtube-player0703');
    const result4 = await YoutubePlayerWeb.destroy('youtube-player0704');
    const result5 = await YoutubePlayerWeb.destroy('youtube-player0705');
    const result6 = await YoutubePlayerWeb.destroy('youtube-player0706');
    const result7 = await YoutubePlayerWeb.destroy('youtube-player0707');
    const result8 = await YoutubePlayerWeb.destroy('youtube-player0708');
    const result9 = await YoutubePlayerWeb.destroy('youtube-player0709');
    const result10 = await YoutubePlayerWeb.destroy('youtube-player0710');
    const result11 = await YoutubePlayerWeb.destroy('youtube-player0711');
    const result12 = await YoutubePlayerWeb.destroy('youtube-player0712');
    const result13 = await YoutubePlayerWeb.destroy('youtube-player0713');
    const result14 = await YoutubePlayerWeb.destroy('youtube-player0714');
    const result15 = await YoutubePlayerWeb.destroy('youtube-player0715');
    const result16 = await YoutubePlayerWeb.destroy('youtube-player0716');
    const result17 = await YoutubePlayerWeb.destroy('youtube-player0717');
    const result18 = await YoutubePlayerWeb.destroy('youtube-player0718');
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
