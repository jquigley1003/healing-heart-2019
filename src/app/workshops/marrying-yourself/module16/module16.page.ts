import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { YoutubePlayerWeb } from 'capacitor-youtube-player'; // Web version
import { gsap } from 'gsap';

@Component({
  selector: 'app-module16',
  templateUrl: './module16.page.html',
  styleUrls: ['./module16.page.scss'],
})
export class Module16Page implements OnInit, AfterViewInit {
  @ViewChild('intentionsVowsAudio') intentionsVowsAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('guidanceVowsAudio') guidanceVowsAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('preparingAudio') preparingAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('ideasCeremonyAudio') ideasCeremonyAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('futureMarriedAudio') futureMarriedAudioRef: ElementRef<HTMLAudioElement>;

  completedModule: boolean;
  showCompleteBtn: boolean;
  showIncompleteBtn = true;
  audioDuration1601: number;
  audioDuration1602: number;
  audioDuration1603: number;
  audioDuration1604: number;
  audioDuration1605: number;
  assignment1601: boolean;
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
    this.intentionsVowsAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1601 = this.intentionsVowsAudioRef.nativeElement.duration;
    };
    this.guidanceVowsAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1602 = this.guidanceVowsAudioRef.nativeElement.duration;
    };
    this.preparingAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1603 = this.preparingAudioRef.nativeElement.duration;
    };
    this.ideasCeremonyAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1604 = this.ideasCeremonyAudioRef.nativeElement.duration;
    };
    this.futureMarriedAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1605 = this.futureMarriedAudioRef.nativeElement.duration;
    };
  }

  async initializeYoutubePlayerPluginWeb() {
    const player1 = {playerId: 'youtube-player1601', playerSize: {width: 640, height: 360}, videoId: 'iQJ7b_xfF2s'};
    const result1 = await YoutubePlayerWeb.initialize(player1);
  }

  async destroyYoutubePlayerPluginWeb() {
    const result1 = await YoutubePlayerWeb.destroy('youtube-player1601');
  }

  onToggle() {
    console.log('completed is: ',this.completedModule);
  }

  assignmentCheck(assignment) {
    console.log('result of check: ', assignment);
    // const assignmentComplete = {
    //   userName: this.currentUser.firstName + ' ' + this.currentUser.lastName,
    //   [assignment]: true
    // };
    // console.log('========= ',assignment,' CHECKED');
      // this.assignmentService.assignmentComplete(assignment, assignmentComplete, this.currentUser);
  }

  assignmentUncheck(assignment) {
    console.log('result of check: ', assignment);
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
