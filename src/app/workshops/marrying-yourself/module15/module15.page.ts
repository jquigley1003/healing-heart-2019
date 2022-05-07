import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { YoutubePlayerWeb } from 'capacitor-youtube-player'; // Web version
import Player from '@vimeo/player';
import { gsap } from 'gsap';

@Component({
  selector: 'app-module15',
  templateUrl: './module15.page.html',
  styleUrls: ['./module15.page.scss'],
})
export class Module15Page implements OnInit, AfterViewInit {
  @ViewChild('welcomeFocusDivineAudio') welcomeFocusDivineAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('spiritualAdultAudio') spiritualAdultAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('namingYourselfAudio') namingYourselfAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('breathingExerciseAudio') breathingExerciseAudioRef: ElementRef<HTMLAudioElement>;

  @ViewChild('chavonneVerticalVimeo') chavonneVerticalVimeoRef: ElementRef;
  @ViewChild('moreThoughtsVimeo') moreThoughtsVimeoRef: ElementRef;


  completedModule: boolean;
  showCompleteBtn: boolean;
  showIncompleteBtn = true;
  audioDuration1501: number;
  audioDuration1502: number;
  audioDuration1503: number;
  audioDuration1504: number;
  
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
    this.welcomeFocusDivineAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1501 = this.welcomeFocusDivineAudioRef.nativeElement.duration;
    };
    this.spiritualAdultAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1502 = this.spiritualAdultAudioRef.nativeElement.duration;
    };
    this.namingYourselfAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1503 = this.namingYourselfAudioRef.nativeElement.duration;
    };
    this.breathingExerciseAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1504 = this.breathingExerciseAudioRef.nativeElement.duration;
    };
    this.chavonneVerticalVimeoPlayer = new Player(this.chavonneVerticalVimeoRef.nativeElement, {
      id: 696593721,
      height: 350
    });
  }

  async initializeYoutubePlayerPluginWeb() {
    const player1 = {playerId: 'youtube-player1501', playerSize: {width: 640, height: 360}, videoId: 'RXU0ywJJb8E'};
    const result1 = await YoutubePlayerWeb.initialize(player1);
    const player2 = {playerId: 'youtube-player1502', playerSize: {width: 640, height: 360}, videoId: 'e11zx5TzRxo'};
    const result2 = await YoutubePlayerWeb.initialize(player2);
    const player3 = {playerId: 'youtube-player1503', playerSize: {width: 640, height: 360}, videoId: 'D4HxOinvaos'};
    const result3 = await YoutubePlayerWeb.initialize(player3);
    const player4 = {playerId: 'youtube-player1504', playerSize: {width: 640, height: 360}, videoId: '4cL20-bscdM'};
    const result4 = await YoutubePlayerWeb.initialize(player4);
    const player5 = {playerId: 'youtube-player1505', playerSize: {width: 640, height: 360}, videoId: 'OPT7687_yko'};
    const result5 = await YoutubePlayerWeb.initialize(player5);
    // const player6 = {playerId: 'youtube-player1206', playerSize: {width: 640, height: 360}, videoId: '9hbJtyxx7gA'};
    // const result6 = await YoutubePlayerWeb.initialize(player6);
  }

  async destroyYoutubePlayerPluginWeb() {
    const result1 = await YoutubePlayerWeb.destroy('youtube-player1501');
    const result2 = await YoutubePlayerWeb.destroy('youtube-player1502');
    const result3 = await YoutubePlayerWeb.destroy('youtube-player1503');
    const result4 = await YoutubePlayerWeb.destroy('youtube-player1504');
    const result5 = await YoutubePlayerWeb.destroy('youtube-player1505');
    // const result6 = await YoutubePlayerWeb.destroy('youtube-player1206');
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
