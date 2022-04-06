import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { YoutubePlayerWeb } from 'capacitor-youtube-player'; // Web version
import Player from '@vimeo/player';
import { gsap } from 'gsap';

@Component({
  selector: 'app-module10',
  templateUrl: './module10.page.html',
  styleUrls: ['./module10.page.scss'],
})
export class Module10Page implements OnInit, AfterViewInit {
  @ViewChild('introModule10Audio') introModule10AudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('selfReflectionOneAudio') selfReflectionOneAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('femManQualitiesAudio') femManQualitiesAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('selfInquiryFemMascAudio') selfInquiryFemMascAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('femininePrinciplesAudio') femininePrinciplesAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('masculinePrinciplesAudio') masculinePrinciplesAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('selfReflectionTwoAudio') selfReflectionTwoAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('selfReflectionThreeAudio') selfReflectionThreeAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('guidedImageryAudio') guidedImageryAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('selfInquiryGuidedImageryAudio') selfInquiryGuidedImageryAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('practicesFemMascAudio') practicesFemMascAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('callAttributesVimeo') callAttributesVimeoRef: ElementRef;
  @ViewChild('tavariBrownVimeo') tavariBrownVimeoRef: ElementRef;


  completedModule: boolean;
  showCompleteBtn: boolean;
  showIncompleteBtn = true;
  assignment1001: boolean;
  assignment1002: boolean;
  assignment1003: boolean;
  assignment1004: boolean;
  assignment1005: boolean;
  assignment1006: boolean;
  assignment1007: boolean;
  assignment1008: boolean;
  assignment1009: boolean;
  assignment1010: boolean;
  assignment1011: boolean;
  assignment1012: boolean;
  assignment1013: boolean;
  assignment1014: boolean;
  assignment1016: boolean;
  assignment1017: boolean;
  assignment1018: boolean;
  assignment1019: boolean;
  assignment1020: boolean;
  assignment1021: boolean;
  assignment1022: boolean;
  assignment1023: boolean;
  assignment1024: boolean;
  assignment1025: boolean;
  assignment1026: boolean;
  assignment1027: boolean;
  assignment1028: boolean;
  assignment1029: boolean;
  assignment1030: boolean;
  audioDuration1001: number;
  audioDuration1002: number;
  audioDuration1003: number;
  audioDuration1004: number;
  audioDuration1005: number;
  audioDuration1006: number;
  audioDuration1007: number;
  audioDuration1008: number;
  audioDuration1009: number;
  audioDuration1010: number;
  audioDuration1011: number;
  callAttributesVimeoPlayer: Player;
  tavariBrownVimeoPlayer: Player;
  tl1 = null;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {this.animate07Title()}, 1.5*1000);
  }

  animate07Title() {
    gsap.set(".dark", {opacity:1});
    gsap.set(".title", {scale:1});
    gsap.set(".effect", {autoAlpha:1}) //remove fouc
    this.tl1 = gsap.timeline()
      .to(".title", {scale:50, duration:2, ease:"power4.inOut"})
      .to(".blendImage, .bg", {scale:1, duration:2}, 0)
      .to(".dark", {opacity:0, duration:1}, ">-=100%")
  
      this.tl1.play();
      // .then(() => {
      //   tl.reverse();
      // })
  }

  ngAfterViewInit() {
    this.introModule10AudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1001 = this.introModule10AudioRef.nativeElement.duration;
    };
    this.selfReflectionOneAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1002 = this.selfReflectionOneAudioRef.nativeElement.duration;
    };
    this.femManQualitiesAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1003 = this.femManQualitiesAudioRef.nativeElement.duration;
    };
    this.selfInquiryFemMascAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1004 = this.selfInquiryFemMascAudioRef.nativeElement.duration;
    };
    this.femininePrinciplesAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1005 = this.femininePrinciplesAudioRef.nativeElement.duration;
    };
    this.masculinePrinciplesAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1006 = this.masculinePrinciplesAudioRef.nativeElement.duration;
    };
    this.selfReflectionTwoAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1007 = this.selfReflectionTwoAudioRef.nativeElement.duration;
    };
    this.selfReflectionThreeAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1008 = this.selfReflectionThreeAudioRef.nativeElement.duration;
    };
    this.guidedImageryAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1009 = this.guidedImageryAudioRef.nativeElement.duration;
    };
    this.selfInquiryGuidedImageryAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1010 = this.selfInquiryGuidedImageryAudioRef.nativeElement.duration;
    };
    this.practicesFemMascAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1011 = this.practicesFemMascAudioRef.nativeElement.duration;
    };
    this.callAttributesVimeoPlayer = new Player(this.callAttributesVimeoRef.nativeElement, {
      id: 681115797,
      height: 350
    });
    this.tavariBrownVimeoPlayer = new Player(this.tavariBrownVimeoRef.nativeElement, {
      id: 681118655,
      height: 350
    });
  }

  async initializeYoutubePlayerPluginWeb() {
    const player1 = {playerId: 'youtube-player1001', playerSize: {width: 640, height: 360}, videoId: 'D4HxOinvaos'};
    const result1 = await YoutubePlayerWeb.initialize(player1);
    const player2 = {playerId: 'youtube-player1002', playerSize: {width: 640, height: 360}, videoId: '4xfusryXtrI'};
    const result2 = await YoutubePlayerWeb.initialize(player2);
  }

  async destroyYoutubePlayerPluginWeb() {
    const result1 = await YoutubePlayerWeb.destroy('youtube-player1001');
    const result2 = await YoutubePlayerWeb.destroy('youtube-player1002');
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
    gsap.set(".dark", {opacity:1});
    gsap.set(".title", {scale:1});
    if(this.tl1 != null) {
      this.tl1.restart();
    }
  }
}
