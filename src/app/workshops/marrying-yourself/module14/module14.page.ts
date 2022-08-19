import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { YoutubePlayerWeb } from 'capacitor-youtube-player'; // Web version
import { gsap } from 'gsap';

@Component({
  selector: 'app-module14',
  templateUrl: './module14.page.html',
  styleUrls: ['./module14.page.scss'],
})
export class Module14Page implements OnInit, AfterViewInit {
  @ViewChild('boundariesAudio') boundariesAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('practiceBoundariesAudio') practiceBoundariesAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('selfInquiryBoundariesAudio') selfInquiryBoundariesAudioRef: ElementRef<HTMLAudioElement>;

  completedModule: boolean;
  showCompleteBtn: boolean;
  showIncompleteBtn = true;
  audioDuration1401: number;
  audioDuration1402: number;
  audioDuration1403: number;
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
    this.boundariesAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1401 = this.boundariesAudioRef.nativeElement.duration;
    };
    this.practiceBoundariesAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1402 = this.practiceBoundariesAudioRef.nativeElement.duration;
    };
    this.selfInquiryBoundariesAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1403 = this.selfInquiryBoundariesAudioRef.nativeElement.duration;
    };
  }

  async initializeYoutubePlayerPluginWeb() {
    const player1 = {playerId: 'youtube-player1401', playerSize: {width: 640, height: 360}, videoId: 'bqXHJm4CfXo'};
    const result1 = await YoutubePlayerWeb.initialize(player1);
  }

  async destroyYoutubePlayerPluginWeb() {
    const result1 = await YoutubePlayerWeb.destroy('youtube-player1401');
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
