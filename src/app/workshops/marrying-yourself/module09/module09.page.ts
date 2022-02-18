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
  // @ViewChild('selfRetrievalRitualAudio') selfRetrievalRitualAudioRef: ElementRef<HTMLAudioElement>;
  // @ViewChild('mettaMeditationAudio') mettaMeditationAudioRef: ElementRef<HTMLAudioElement>;
  // @ViewChild('theGuestHouseAudio') theGuestHouseAudioRef: ElementRef<HTMLAudioElement>;
  // @ViewChild('theInvitationAudio') theInvitationAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('sonataVimeo') sonataVimeoRef: ElementRef;
  @ViewChild('selfRetrievalDemoVimeo') selfRetrievalDemoVimeoRef: ElementRef;


  completedModule: boolean;
  showCompleteBtn: boolean;
  showIncompleteBtn = true;
  audioDuration901: number;
  audioDuration902: number;
  audioDuration903: number;
  audioDuration704: number;
  audioDuration705: number;
  audioDuration706: number;
  audioDuration707: number;
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
      this.audioDuration901 = this.introModule09AudioRef.nativeElement.duration;
    };
    this.selfReflectionOneAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration902 = this.selfReflectionOneAudioRef.nativeElement.duration;
    };
    this.femManQualitiesAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration903 = this.femManQualitiesAudioRef.nativeElement.duration;
    };
    // this.selfRetrievalRitualAudioRef.nativeElement.onloadedmetadata = (event) => {
    //   this.audioDuration704 = this.selfRetrievalRitualAudioRef.nativeElement.duration;
    // };
    // this.mettaMeditationAudioRef.nativeElement.onloadedmetadata = (event) => {
    //   this.audioDuration705 = this.mettaMeditationAudioRef.nativeElement.duration;
    // };
    // this.theGuestHouseAudioRef.nativeElement.onloadedmetadata = (event) => {
    //   this.audioDuration706 = this.theGuestHouseAudioRef.nativeElement.duration;
    // };
    // this.theInvitationAudioRef.nativeElement.onloadedmetadata = (event) => {
    //   this.audioDuration707 = this.theInvitationAudioRef.nativeElement.duration;
    // };
    this.sonataVimeoPlayer = new Player(this.sonataVimeoRef.nativeElement, {
      id: 670040962,
      height: 350
    });
    this.selfRetrievalDemoVimeoPlayer = new Player(this.selfRetrievalDemoVimeoRef.nativeElement, {
      id: 670845671,
      height: 350
    });
  }

  async initializeYoutubePlayerPluginWeb() {
    const player7 = {playerId: 'youtube-player0707', playerSize: {width: 640, height: 360}, videoId: 'D4HxOinvaos'};
    const result7 = await YoutubePlayerWeb.initialize(player7);
  }

  async destroyYoutubePlayerPluginWeb() {
    const result7 = await YoutubePlayerWeb.destroy('youtube-player0707');
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
