import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { YoutubePlayerWeb } from 'capacitor-youtube-player'; // Web version
import Player from '@vimeo/player';
import { gsap } from 'gsap';

@Component({
  selector: 'app-module17',
  templateUrl: './module17.page.html',
  styleUrls: ['./module17.page.scss'],
})
export class Module17Page implements OnInit, AfterViewInit {
  @ViewChild('honorYourselfAudio') honorYourselfAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('guidedImageryAudio') guidedImageryAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('congratulationsAudio') congratulationsAudioRef: ElementRef<HTMLAudioElement>;
  // @ViewChild('ideasCeremonyAudio') ideasCeremonyAudioRef: ElementRef<HTMLAudioElement>;
  // @ViewChild('futureMarriedAudio') futureMarriedAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('weddingTestimonialVimeo') weddingTestimonialVimeoRef: ElementRef;

  completedModule: boolean;
  showCompleteBtn: boolean;
  showIncompleteBtn = true;
  audioDuration1701: number;
  audioDuration1702: number;
  audioDuration1703: number;
  audioDuration1604: number;
  audioDuration1605: number;
  assignment1601: boolean;
  tl1 = null;
  weddingTestimonialVimeoPlayer: Player;
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
    this.honorYourselfAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1701 = this.honorYourselfAudioRef.nativeElement.duration;
    };
    this.guidedImageryAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1702 = this.guidedImageryAudioRef.nativeElement.duration;
    };
    this.congratulationsAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1703 = this.congratulationsAudioRef.nativeElement.duration;
    };
    // this.ideasCeremonyAudioRef.nativeElement.onloadedmetadata = (event) => {
    //   this.audioDuration1604 = this.ideasCeremonyAudioRef.nativeElement.duration;
    // };
    // this.futureMarriedAudioRef.nativeElement.onloadedmetadata = (event) => {
    //   this.audioDuration1605 = this.futureMarriedAudioRef.nativeElement.duration;
    // };
    this.weddingTestimonialVimeoPlayer = new Player(this.weddingTestimonialVimeoRef.nativeElement, {
      id: 700089565,
      height: 350
    });
  }

  async initializeYoutubePlayerPluginWeb() {
    const player1 = {playerId: 'youtube-player1601', playerSize: {width: 640, height: 360}, videoId: 'iQJ7b_xfF2s'};
    const result1 = await YoutubePlayerWeb.initialize(player1);
  }

  async destroyYoutubePlayerPluginWeb() {
    const result1 = await YoutubePlayerWeb.destroy('youtube-player1601');
  }

  showCongrats() {
    this.showRemainingModule = true;
  }

  onToggle() {
    console.log('completed is: ',this.completedModule);
  }

  assignmentCheck(assignment) {
    console.log('result of check: ', assignment);
    this.assignment1601 = true;
    // const assignmentComplete = {
    //   userName: this.currentUser.firstName + ' ' + this.currentUser.lastName,
    //   [assignment]: true
    // };
    // console.log('========= ',assignment,' CHECKED');
      // this.assignmentService.assignmentComplete(assignment, assignmentComplete, this.currentUser);
  }

  assignmentUncheck(assignment) {
    console.log('result of check: ', assignment);
    this.assignment1601 = false;
    // const assignmentComplete = {
    //   userName: this.currentUser.firstName + ' ' + this.currentUser.lastName,
    //   [assignment]: false
    // };
    // console.log('========= ',assignment,' UNCHECKED');
      // this.assignmentService.assignmentIncomplete(assignment, assignmentComplete, this.currentUser);
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
