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
  
  @ViewChild('sonataVimeo') sonataVimeoRef: ElementRef;
  @ViewChild('selfRetrievalDemoVimeo') selfRetrievalDemoVimeoRef: ElementRef;


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
  audioDuration0901: number;
  audioDuration0902: number;
  audioDuration0903: number;
  audioDuration0904: number;
  audioDuration0905: number;
  audioDuration0906: number;
  audioDuration0907: number;
  audioDuration0908: number;
  sonataVimeoPlayer: Player;
  selfRetrievalDemoVimeoPlayer: Player;
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
    this.selfRetrievalDemoVimeoPlayer = new Player(this.selfRetrievalDemoVimeoRef.nativeElement, {
      id: 670845671,
      height: 350
    });
  }

  async initializeYoutubePlayerPluginWeb() {
    const player1 = {playerId: 'youtube-player0901', playerSize: {width: 640, height: 360}, videoId: 'D4HxOinvaos'};
    const result1 = await YoutubePlayerWeb.initialize(player1);
  }

  async destroyYoutubePlayerPluginWeb() {
    const result1 = await YoutubePlayerWeb.destroy('youtube-player0901');
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
