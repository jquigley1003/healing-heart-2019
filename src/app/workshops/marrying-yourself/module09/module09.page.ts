import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { YoutubePlayerWeb } from 'capacitor-youtube-player'; // Web version
import Player from '@vimeo/player';
import { gsap } from 'gsap';

@Component({
  selector: 'app-module09',
  templateUrl: './module09.page.html',
  styleUrls: ['./module09.page.scss'],
})
export class Module09Page implements OnInit, AfterViewInit {
  @ViewChild('introModule09Audio') introModule09AudioRef: ElementRef<HTMLAudioElement>;
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
  assignment0901: boolean;
  assignment0902: boolean;
  assignment0903: boolean;
  assignment0904: boolean;
  assignment0905: boolean;
  assignment0906: boolean;
  assignment0907: boolean;
  assignment0908: boolean;
  assignment0909: boolean;
  assignment0910: boolean;
  assignment0911: boolean;
  assignment0912: boolean;
  assignment0913: boolean;
  assignment0914: boolean;
  assignment0916: boolean;
  assignment0917: boolean;
  assignment0918: boolean;
  assignment0919: boolean;
  assignment0920: boolean;
  assignment0921: boolean;
  assignment0922: boolean;
  assignment0923: boolean;
  assignment0924: boolean;
  assignment0925: boolean;
  assignment0926: boolean;
  assignment0927: boolean;
  assignment0928: boolean;
  assignment0929: boolean;
  assignment0930: boolean;
  audioDuration0901: number;
  audioDuration0902: number;
  audioDuration0903: number;
  audioDuration0904: number;
  audioDuration0905: number;
  audioDuration0906: number;
  audioDuration0907: number;
  audioDuration0908: number;
  audioDuration0909: number;
  audioDuration0910: number;
  audioDuration0911: number;
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
    this.introModule09AudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0901 = this.introModule09AudioRef.nativeElement.duration;
    };
    this.selfReflectionOneAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0902 = this.selfReflectionOneAudioRef.nativeElement.duration;
    };
    this.femManQualitiesAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0903 = this.femManQualitiesAudioRef.nativeElement.duration;
    };
    this.selfInquiryFemMascAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0904 = this.selfInquiryFemMascAudioRef.nativeElement.duration;
    };
    this.femininePrinciplesAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0905 = this.femininePrinciplesAudioRef.nativeElement.duration;
    };
    this.masculinePrinciplesAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0906 = this.masculinePrinciplesAudioRef.nativeElement.duration;
    };
    this.selfReflectionTwoAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0907 = this.selfReflectionTwoAudioRef.nativeElement.duration;
    };
    this.selfReflectionThreeAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0908 = this.selfReflectionThreeAudioRef.nativeElement.duration;
    };
    this.guidedImageryAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0909 = this.guidedImageryAudioRef.nativeElement.duration;
    };
    this.selfInquiryGuidedImageryAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0910 = this.selfInquiryGuidedImageryAudioRef.nativeElement.duration;
    };
    this.practicesFemMascAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0911 = this.practicesFemMascAudioRef.nativeElement.duration;
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
    const player1 = {playerId: 'youtube-player0901', playerSize: {width: 640, height: 360}, videoId: 'D4HxOinvaos'};
    const result1 = await YoutubePlayerWeb.initialize(player1);
    const player2 = {playerId: 'youtube-player0902', playerSize: {width: 640, height: 360}, videoId: '4xfusryXtrI'};
    const result2 = await YoutubePlayerWeb.initialize(player2);
  }

  async destroyYoutubePlayerPluginWeb() {
    const result1 = await YoutubePlayerWeb.destroy('youtube-player0901');
    const result2 = await YoutubePlayerWeb.destroy('youtube-player0902');
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
