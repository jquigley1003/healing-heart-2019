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
  // @ViewChild('transformingMindAudio') transformingMindAudioRef: ElementRef<HTMLAudioElement>;
  // @ViewChild('practiceTamingMindAudio') practiceTamingMindAudioRef: ElementRef<HTMLAudioElement>;
  // @ViewChild('embracingYourHeartAudio') embracingYourHeartAudioRef: ElementRef<HTMLAudioElement>;
  // @ViewChild('guidedImageryHeartAudio') guidedImageryHeartAudioRef: ElementRef<HTMLAudioElement>;
  // @ViewChild('practiceEmbracingHeartAudio') practiceEmbracingHeartAudioRef: ElementRef<HTMLAudioElement>;
  // @ViewChild('lovingYourBodyAudio') lovingYourBodyAudioRef: ElementRef<HTMLAudioElement>;
  // @ViewChild('practiceLovingYourBodyAudio') practiceLovingYourBodyAudioRef: ElementRef<HTMLAudioElement>;
  // @ViewChild('nourishYourSoulAudio') nourishYourSoulAudioRef: ElementRef<HTMLAudioElement>;
  // @ViewChild('practiceNourishSoulAudio') practiceNourishSoulAudioRef: ElementRef<HTMLAudioElement>;


  completedModule: boolean;
  showCompleteBtn: boolean;
  showIncompleteBtn = true;
  audioDuration801: number;
  audioDuration802: number;
  audioDuration803: number;
  audioDuration804: number;
  audioDuration605: number;
  audioDuration606: number;
  audioDuration607: number;
  audioDuration608: number;
  audioDuration609: number;
  audioDuration610: number;
  audioDuration611: number;
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
    // this.transformingMindAudioRef.nativeElement.onloadedmetadata = (event) => {
    //   this.audioDuration605 = this.transformingMindAudioRef.nativeElement.duration;
    // };
    // this.practiceTamingMindAudioRef.nativeElement.onloadedmetadata = (event) => {
    //   this.audioDuration606 = this.practiceTamingMindAudioRef.nativeElement.duration;
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
  }

  async destroyYoutubePlayerPluginWeb() {
    const result1 = await YoutubePlayerWeb.destroy('youtube-player0801');
    const result2 = await YoutubePlayerWeb.destroy('youtube-player0802');
    const result3 = await YoutubePlayerWeb.destroy('youtube-player0803');
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
