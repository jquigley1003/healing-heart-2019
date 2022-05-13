import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { YoutubePlayerWeb } from 'capacitor-youtube-player'; // Web version
import Player from '@vimeo/player';
import { gsap } from 'gsap';

@Component({
  selector: 'app-module16',
  templateUrl: './module16.page.html',
  styleUrls: ['./module16.page.scss'],
})
export class Module16Page implements OnInit, AfterViewInit {
  // @ViewChild('welcomeFocusDivineAudio') welcomeFocusDivineAudioRef: ElementRef<HTMLAudioElement>;
  // @ViewChild('spiritualAdultAudio') spiritualAdultAudioRef: ElementRef<HTMLAudioElement>;
  // @ViewChild('namingYourselfAudio') namingYourselfAudioRef: ElementRef<HTMLAudioElement>;
  // @ViewChild('breathingExerciseAudio') breathingExerciseAudioRef: ElementRef<HTMLAudioElement>;
  // @ViewChild('namingGoddessAudio') namingGoddessAudioRef: ElementRef<HTMLAudioElement>;
  // @ViewChild('experiencingDivineAudio') experiencingDivineAudioRef: ElementRef<HTMLAudioElement>;
  // @ViewChild('siddharthaAudio') siddharthaAudioRef: ElementRef<HTMLAudioElement>;
  // @ViewChild('guidedLoveAudio') guidedLoveAudioRef: ElementRef<HTMLAudioElement>;

  // @ViewChild('chavonneVerticalVimeo') chavonneVerticalVimeoRef: ElementRef;
  // @ViewChild('moreThoughtsVimeo') moreThoughtsVimeoRef: ElementRef;


  completedModule: boolean;
  showCompleteBtn: boolean;
  showIncompleteBtn = true;
  audioDuration1501: number;
  audioDuration1502: number;
  audioDuration1503: number;
  audioDuration1504: number;
  audioDuration1505: number;
  audioDuration1506: number;
  audioDuration1507: number;
  audioDuration1508: number;
  
  chavonneVerticalVimeoPlayer: Player;
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
    // this.welcomeFocusDivineAudioRef.nativeElement.onloadedmetadata = (event) => {
    //   this.audioDuration1501 = this.welcomeFocusDivineAudioRef.nativeElement.duration;
    // };
    // this.spiritualAdultAudioRef.nativeElement.onloadedmetadata = (event) => {
    //   this.audioDuration1502 = this.spiritualAdultAudioRef.nativeElement.duration;
    // };
    // this.namingYourselfAudioRef.nativeElement.onloadedmetadata = (event) => {
    //   this.audioDuration1503 = this.namingYourselfAudioRef.nativeElement.duration;
    // };
    // this.breathingExerciseAudioRef.nativeElement.onloadedmetadata = (event) => {
    //   this.audioDuration1504 = this.breathingExerciseAudioRef.nativeElement.duration;
    // };
    // this.namingGoddessAudioRef.nativeElement.onloadedmetadata = (event) => {
    //   this.audioDuration1505 = this.namingGoddessAudioRef.nativeElement.duration;
    // };
    // this.experiencingDivineAudioRef.nativeElement.onloadedmetadata = (event) => {
    //   this.audioDuration1506 = this.experiencingDivineAudioRef.nativeElement.duration;
    // };
    // this.siddharthaAudioRef.nativeElement.onloadedmetadata = (event) => {
    //   this.audioDuration1507 = this.siddharthaAudioRef.nativeElement.duration;
    // };
    // this.guidedLoveAudioRef.nativeElement.onloadedmetadata = (event) => {
    //   this.audioDuration1508 = this.guidedLoveAudioRef.nativeElement.duration;
    // };
    // this.chavonneVerticalVimeoPlayer = new Player(this.chavonneVerticalVimeoRef.nativeElement, {
    //   id: 696593721,
    //   height: 350
    // });
  }

  async initializeYoutubePlayerPluginWeb() {
    // const player1 = {playerId: 'youtube-player1501', playerSize: {width: 640, height: 360}, videoId: 'RXU0ywJJb8E'};
    // const result1 = await YoutubePlayerWeb.initialize(player1);
    // const player2 = {playerId: 'youtube-player1502', playerSize: {width: 640, height: 360}, videoId: 'e11zx5TzRxo'};
    // const result2 = await YoutubePlayerWeb.initialize(player2);
    // const player3 = {playerId: 'youtube-player1503', playerSize: {width: 640, height: 360}, videoId: 'D4HxOinvaos'};
    // const result3 = await YoutubePlayerWeb.initialize(player3);
    // const player4 = {playerId: 'youtube-player1504', playerSize: {width: 640, height: 360}, videoId: '4cL20-bscdM'};
    // const result4 = await YoutubePlayerWeb.initialize(player4);
    // const player5 = {playerId: 'youtube-player1505', playerSize: {width: 640, height: 360}, videoId: 'OPT7687_yko'};
    // const result5 = await YoutubePlayerWeb.initialize(player5);
    // const player6 = {playerId: 'youtube-player1506', playerSize: {width: 640, height: 360}, videoId: 'FQ6-lu7GhV0'};
    // const result6 = await YoutubePlayerWeb.initialize(player6);
    // const player7 = {playerId: 'youtube-player1507', playerSize: {width: 640, height: 360}, videoId: 'GOVYDIHeecA'};
    // const result7 = await YoutubePlayerWeb.initialize(player7);
    // const player8 = {playerId: 'youtube-player1508', playerSize: {width: 640, height: 360}, videoId: 'OOgpT5rEKIU'};
    // const result8 = await YoutubePlayerWeb.initialize(player8);
    // const player9 = {playerId: 'youtube-player1509', playerSize: {width: 640, height: 360}, videoId: 'lwgr_IMeEgA'};
    // const result9 = await YoutubePlayerWeb.initialize(player9);
    // const player10 = {playerId: 'youtube-player1510', playerSize: {width: 640, height: 360}, videoId: '4gUY9QshcVQ'};
    // const result10 = await YoutubePlayerWeb.initialize(player10);
    // const player11 = {playerId: 'youtube-player1511', playerSize: {width: 640, height: 360}, videoId: 'JvljlbKsL2Y'};
    // const result11 = await YoutubePlayerWeb.initialize(player11);
  }

  async destroyYoutubePlayerPluginWeb() {
    // const result1 = await YoutubePlayerWeb.destroy('youtube-player1501');
    // const result2 = await YoutubePlayerWeb.destroy('youtube-player1502');
    // const result3 = await YoutubePlayerWeb.destroy('youtube-player1503');
    // const result4 = await YoutubePlayerWeb.destroy('youtube-player1504');
    // const result5 = await YoutubePlayerWeb.destroy('youtube-player1505');
    // const result6 = await YoutubePlayerWeb.destroy('youtube-player1506');
    // const result7 = await YoutubePlayerWeb.destroy('youtube-player1507');
    // const result8 = await YoutubePlayerWeb.destroy('youtube-player1508');
    // const result9 = await YoutubePlayerWeb.destroy('youtube-player1509');
    // const result10 = await YoutubePlayerWeb.destroy('youtube-player1510');
    // const result11 = await YoutubePlayerWeb.destroy('youtube-player1511');
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
