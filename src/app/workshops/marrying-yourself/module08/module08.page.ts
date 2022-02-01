import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { YoutubePlayerWeb } from 'capacitor-youtube-player'; // Web version
import { gsap } from 'gsap';

@Component({
  selector: 'app-module08',
  templateUrl: './module08.page.html',
  styleUrls: ['./module08.page.scss'],
})
export class Module08Page implements AfterViewInit, OnInit {
  @ViewChild('introModule08Audio') introModule08AudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('beingPresentAudio') beingPresentAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('bsaoAudio') bsaoAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('enjoymentAudio') enjoymentAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('livingTheDharmaAudio') livingTheDharmaAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('understandingYourImpactAudio') understandingYourImpactAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('beautyDivineAudio') beautyDivineAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('courageousHonestyAudio') courageousHonestyAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('innerTranslatorAudio') innerTranslatorAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('healthyBoundariesAudio') healthyBoundariesAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('selfInquiryBoundariesAudio') selfInquiryBoundariesAudioRef: ElementRef<HTMLAudioElement>;
  // @ViewChild('nourishYourSoulAudio') nourishYourSoulAudioRef: ElementRef<HTMLAudioElement>;
  // @ViewChild('practiceNourishSoulAudio') practiceNourishSoulAudioRef: ElementRef<HTMLAudioElement>;


  completedModule: boolean;
  showCompleteBtn: boolean;
  showIncompleteBtn = true;
  audioDuration801: number;
  audioDuration802: number;
  audioDuration803: number;
  audioDuration804: number;
  audioDuration805: number;
  audioDuration806: number;
  audioDuration807: number;
  audioDuration808: number;
  audioDuration809: number;
  audioDuration810: number;
  audioDuration811: number;
  audioDuration612: number;
  audioDuration613: number;
  tl1 = null;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {this.animate08Title()}, 1.5*1000);
  }

  ngAfterViewInit() {
    this.introModule08AudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration801 = this.introModule08AudioRef.nativeElement.duration;
    };
    this.beingPresentAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration802 = this.beingPresentAudioRef.nativeElement.duration;
    };
    this.bsaoAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration803 = this.bsaoAudioRef.nativeElement.duration;
    };
    this.enjoymentAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration804 = this.enjoymentAudioRef.nativeElement.duration;
    };
    this.livingTheDharmaAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration805 = this.livingTheDharmaAudioRef.nativeElement.duration;
    };
    this.understandingYourImpactAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration806 = this.understandingYourImpactAudioRef.nativeElement.duration;
    };
    this.beautyDivineAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration807 = this.beautyDivineAudioRef.nativeElement.duration;
    };
    this.courageousHonestyAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration808 = this.courageousHonestyAudioRef.nativeElement.duration;
    };
    this.innerTranslatorAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration809 = this.innerTranslatorAudioRef.nativeElement.duration;
    };
    this.healthyBoundariesAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration810 = this.healthyBoundariesAudioRef.nativeElement.duration;
    };
    this.selfInquiryBoundariesAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration811 = this.selfInquiryBoundariesAudioRef.nativeElement.duration;
    };
    // this.nourishYourSoulAudioRef.nativeElement.onloadedmetadata = (event) => {
    //   this.audioDuration612 = this.nourishYourSoulAudioRef.nativeElement.duration;
    // };
    // this.practiceNourishSoulAudioRef.nativeElement.onloadedmetadata = (event) => {
    //   this.audioDuration613 = this.practiceNourishSoulAudioRef.nativeElement.duration;
    // };
  }

  animate08Title() {
    gsap.set(".effect", {autoAlpha:1}) //remove fouc
    this.tl1 = gsap.timeline()
      .to(".title", {scale:50, duration:2, ease:"power4.inOut"})
      .to(".blendImage, .bg", {scale:1, duration:2}, 0)
      .to(".dark", {opacity:0, duration:1}, ">-=100%")
    
      this.tl1.play()
      // .then(() => {
      //   tl.reverse();
      // })
  }

  async initializeYoutubePlayerPluginWeb() {
    const player1 = {playerId: 'youtube-player0801', playerSize: {width: 640, height: 360}, videoId: 'MZJN4e0nzls'};
    const result1 = await YoutubePlayerWeb.initialize(player1);
    const player2 = {playerId: 'youtube-player0802', playerSize: {width: 640, height: 360}, videoId: 'bK3BJD67OBA'};
    const result2 = await YoutubePlayerWeb.initialize(player2);
    const player3 = {playerId: 'youtube-player0803', playerSize: {width: 640, height: 360}, videoId: 'HNBCVM4KbUM'};
    const result3 = await YoutubePlayerWeb.initialize(player3);
    const player4 = {playerId: 'youtube-player0804', playerSize: {width: 640, height: 360}, videoId: 'ymPF0q7U5oM'};
    const result4 = await YoutubePlayerWeb.initialize(player4);
    const player5 = {playerId: 'youtube-player0805', playerSize: {width: 640, height: 360}, videoId: 'YkgkThdzX-8'};
    const result5 = await YoutubePlayerWeb.initialize(player5);
    const player6 = {playerId: 'youtube-player0806', playerSize: {width: 640, height: 360}, videoId: 'cef35Fk7YD8'};
    const result6 = await YoutubePlayerWeb.initialize(player6);
    const player7 = {playerId: 'youtube-player0807', playerSize: {width: 640, height: 360}, videoId: 't8AQOQzysjc'};
    const result7 = await YoutubePlayerWeb.initialize(player7);
    const player8 = {playerId: 'youtube-player0808', playerSize: {width: 640, height: 360}, videoId: 'QfpXSa3Au6I'};
    const result8 = await YoutubePlayerWeb.initialize(player8);
    const player9 = {playerId: 'youtube-player0809', playerSize: {width: 640, height: 360}, videoId: 'EHw170UPsyk'};
    const result9 = await YoutubePlayerWeb.initialize(player9);
    const player10 = {playerId: 'youtube-player0810', playerSize: {width: 640, height: 360}, videoId: 'KnXKqCmFBTw'};
    const result10 = await YoutubePlayerWeb.initialize(player10);
    const player11 = {playerId: 'youtube-player0811', playerSize: {width: 640, height: 360}, videoId: 'ynVTqHYg5A4'};
    const result11 = await YoutubePlayerWeb.initialize(player11);
    const player12 = {playerId: 'youtube-player0812', playerSize: {width: 640, height: 360}, videoId: 'IxcS4XGEBGk'};
    const result12 = await YoutubePlayerWeb.initialize(player12);
    const player13 = {playerId: 'youtube-player0813', playerSize: {width: 640, height: 360}, videoId: '7E70pNrQt0k'};
    const result13 = await YoutubePlayerWeb.initialize(player13);
    const player14 = {playerId: 'youtube-player0814', playerSize: {width: 640, height: 360}, videoId: 'hkUSjaGiGzk'};
    const result14 = await YoutubePlayerWeb.initialize(player14);
    const player15 = {playerId: 'youtube-player0815', playerSize: {width: 640, height: 360}, videoId: 'JCnexOFOxCo'};
    const result15 = await YoutubePlayerWeb.initialize(player15);
    const player16 = {playerId: 'youtube-player0816', playerSize: {width: 640, height: 360}, videoId: '-WpdsRPzKco'};
    const result16 = await YoutubePlayerWeb.initialize(player16);
    const player17 = {playerId: 'youtube-player0817', playerSize: {width: 640, height: 360}, videoId: '759qtG5acjU'};
    const result17 = await YoutubePlayerWeb.initialize(player17);
    const player18 = {playerId: 'youtube-player0818', playerSize: {width: 640, height: 360}, videoId: 'ezH-SnJfxgc'};
    const result18 = await YoutubePlayerWeb.initialize(player18);
  }

  async destroyYoutubePlayerPluginWeb() {
    const result1 = await YoutubePlayerWeb.destroy('youtube-player0801');
    const result2 = await YoutubePlayerWeb.destroy('youtube-player0802');
    const result3 = await YoutubePlayerWeb.destroy('youtube-player0803');
    const result4 = await YoutubePlayerWeb.destroy('youtube-player0804');
    const result5 = await YoutubePlayerWeb.destroy('youtube-player0805');
    const result6 = await YoutubePlayerWeb.destroy('youtube-player0806');
    const result7 = await YoutubePlayerWeb.destroy('youtube-player0807');
    const result8 = await YoutubePlayerWeb.destroy('youtube-player0808');
    const result9 = await YoutubePlayerWeb.destroy('youtube-player0809');
    const result10 = await YoutubePlayerWeb.destroy('youtube-player0810');
    const result11 = await YoutubePlayerWeb.destroy('youtube-player0811');
    const result12 = await YoutubePlayerWeb.destroy('youtube-player0812');
    const result13 = await YoutubePlayerWeb.destroy('youtube-player0813');
    const result14 = await YoutubePlayerWeb.destroy('youtube-player0814');
    const result15 = await YoutubePlayerWeb.destroy('youtube-player0815');
    const result16 = await YoutubePlayerWeb.destroy('youtube-player0816');
    const result17 = await YoutubePlayerWeb.destroy('youtube-player0817');
    const result18 = await YoutubePlayerWeb.destroy('youtube-player0818');
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

  ionViewWillEnter() {
    this.initializeYoutubePlayerPluginWeb();
    gsap.set(".dark", {opacity:1});
    gsap.set(".title", {scale:1});
    if(this.tl1 != null) {
      this.tl1.restart();
    }
  }

}
