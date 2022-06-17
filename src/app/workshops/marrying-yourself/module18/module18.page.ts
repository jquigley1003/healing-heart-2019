import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { YoutubePlayerWeb } from 'capacitor-youtube-player'; // Web version
import { gsap } from 'gsap';

@Component({
  selector: 'app-module18',
  templateUrl: './module18.page.html',
  styleUrls: ['./module18.page.scss'],
})
export class Module18Page implements OnInit, AfterViewInit {
  @ViewChild('selfMarriedPersonAudio') selfMarriedPersonAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('practicesBeingMarriedAudio') practicesBeingMarriedAudioRef: ElementRef<HTMLAudioElement>;
  // @ViewChild('congratulationsAudio') congratulationsAudioRef: ElementRef<HTMLAudioElement>;
  // @ViewChild('quote1stModuleAudio') quote1stModuleAudioRef: ElementRef<HTMLAudioElement>;
  // @ViewChild('weddingTestimonialVimeo') weddingTestimonialVimeoRef: ElementRef;
  // @ViewChild('chavonnesWeddingVimeo') chavonnesWeddingVimeoRef: ElementRef;
  // @ViewChild('darlenesWeddingVimeo') darlenesWeddingVimeoRef: ElementRef;
  // @ViewChild('susansWeddingVimeo') susansWeddingVimeoRef: ElementRef;

  completedModule: boolean;
  showCompleteBtn: boolean;
  showIncompleteBtn = true;
  audioDuration1801: number;
  audioDuration1802: number;
  tl1 = null;
  showRemainingModule = false;

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
    this.selfMarriedPersonAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1801 = this.selfMarriedPersonAudioRef.nativeElement.duration;
    };
    this.practicesBeingMarriedAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1802 = this.practicesBeingMarriedAudioRef.nativeElement.duration;
    };
  }

  async initializeYoutubePlayerPluginWeb() {
    const player1 = {playerId: 'youtube-player1801', playerSize: {width: 640, height: 360}, videoId: 'QUQsqBqxoR4'};
    const result1 = await YoutubePlayerWeb.initialize(player1);
    const player2 = {playerId: 'youtube-player1802', playerSize: {width: 640, height: 360}, videoId: 'XLFEvHWD_NE'};
    const result2 = await YoutubePlayerWeb.initialize(player2);
    const player3 = {playerId: 'youtube-player1803', playerSize: {width: 640, height: 360}, videoId: 'HpvK9Af4aiA'};
    const result3 = await YoutubePlayerWeb.initialize(player3);
    const player4 = {playerId: 'youtube-player1804', playerSize: {width: 640, height: 360}, videoId: 'eAfyFTzZDMM'};
    const result4 = await YoutubePlayerWeb.initialize(player4);
    const player5 = {playerId: 'youtube-player1805', playerSize: {width: 640, height: 360}, videoId: 'IYzlVDlE72w'};
    const result5 = await YoutubePlayerWeb.initialize(player5);
  }

  async destroyYoutubePlayerPluginWeb() {
    const result1 = await YoutubePlayerWeb.destroy('youtube-player1801');
    const result2 = await YoutubePlayerWeb.destroy('youtube-player1802');
    const result3 = await YoutubePlayerWeb.destroy('youtube-player1803');
    const result4 = await YoutubePlayerWeb.destroy('youtube-player1804');
    const result5 = await YoutubePlayerWeb.destroy('youtube-player1805');
  }

  showCongrats() {
    this.showRemainingModule = true;
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
