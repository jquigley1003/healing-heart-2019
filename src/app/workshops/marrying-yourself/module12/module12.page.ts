import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { YoutubePlayerWeb } from 'capacitor-youtube-player'; // Web version
import Player from '@vimeo/player';
import { gsap } from 'gsap';

@Component({
  selector: 'app-module12',
  templateUrl: './module12.page.html',
  styleUrls: ['./module12.page.scss'],
})
export class Module12Page implements OnInit, AfterViewInit {
  @ViewChild('parentingYourselfWellAudio') parentingYourselfWellAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('transactionalAnalysisAudio') transactionalAnalysisAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('positiveParentAudio') positiveParentAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('placeNurturingAudio') placeNurturingAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('supportProtectionAudio') supportProtectionAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('setContainStructureAudio') setContainStructureAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('respectBondConsistentAudio') respectBondConsistentAudioRef: ElementRef<HTMLAudioElement>;
  // @ViewChild('romancingYourselfVimeo') romancingYourselfVimeoRef: ElementRef;
  // @ViewChild('moreThoughtsVimeo') moreThoughtsVimeoRef: ElementRef;


  completedModule: boolean;
  showCompleteBtn: boolean;
  showIncompleteBtn = true;
  assignment1201: boolean;
  assignment1202: boolean;
  assignment1203: boolean;
  assignment1204: boolean;
  assignment1205: boolean;
  assignment1206: boolean;
  assignment1207: boolean;
  assignment1208: boolean;
  assignment1209: boolean;
  assignment1210: boolean;

  audioDuration1201: number;
  audioDuration1202: number;
  audioDuration1203: number;
  audioDuration1204: number;
  audioDuration1205: number;
  audioDuration1206: number;
  audioDuration1207: number;
  audioDuration1208: number;
  audioDuration1209: number;
  audioDuration1210: number;
  audioDuration1211: number;
  audioDuration1212: number;
  audioDuration1213: number;
  audioDuration1214: number;
  audioDuration1215: number;
  audioDuration1216: number;
  
  // romancingYourselfVimeoPlayer: Player;
  // moreThoughtsVimeoPlayer: Player;
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
    this.parentingYourselfWellAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1201 = this.parentingYourselfWellAudioRef.nativeElement.duration;
    };
    this.transactionalAnalysisAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1202 = this.transactionalAnalysisAudioRef.nativeElement.duration;
    };
    this.positiveParentAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1203 = this.positiveParentAudioRef.nativeElement.duration;
    };
    this.placeNurturingAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1204 = this.placeNurturingAudioRef.nativeElement.duration;
    };
    this.supportProtectionAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1205 = this.supportProtectionAudioRef.nativeElement.duration;
    };
    this.setContainStructureAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1206 = this.setContainStructureAudioRef.nativeElement.duration;
    };
    this.respectBondConsistentAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1207 = this.respectBondConsistentAudioRef.nativeElement.duration;
    };
    
    // this.romancingYourselfVimeoPlayer = new Player(this.romancingYourselfVimeoRef.nativeElement, {
    //   id: 691091632,
    //   height: 350
    // });
    // this.moreThoughtsVimeoPlayer = new Player(this.moreThoughtsVimeoRef.nativeElement, {
    //   id: 691095098,
    //   height: 350
    // });
  }

  async initializeYoutubePlayerPluginWeb() {
    const player1 = {playerId: 'youtube-player1201', playerSize: {width: 640, height: 360}, videoId: 'RKdYGNQGqFM'};
    const result1 = await YoutubePlayerWeb.initialize(player1);
    // const player2 = {playerId: 'youtube-player1102', playerSize: {width: 640, height: 360}, videoId: 'bd9Ty1xLAeM'};
    // const result2 = await YoutubePlayerWeb.initialize(player2);
    // const player3 = {playerId: 'youtube-player1103', playerSize: {width: 640, height: 360}, videoId: 'LHhoqpgxFNo'};
    // const result3 = await YoutubePlayerWeb.initialize(player3);
    // const player4 = {playerId: 'youtube-player1104', playerSize: {width: 640, height: 360}, videoId: 'SmbmeOgWsqE'};
    // const result4 = await YoutubePlayerWeb.initialize(player4);
    // const player5 = {playerId: 'youtube-player1105', playerSize: {width: 640, height: 360}, videoId: 'E7pagLfV91E'};
    // const result5 = await YoutubePlayerWeb.initialize(player5);
    // const player6 = {playerId: 'youtube-player1106', playerSize: {width: 640, height: 360}, videoId: '9hbJtyxx7gA'};
    // const result6 = await YoutubePlayerWeb.initialize(player6);
  }

  async destroyYoutubePlayerPluginWeb() {
    const result1 = await YoutubePlayerWeb.destroy('youtube-player1201');
    // const result2 = await YoutubePlayerWeb.destroy('youtube-player1102');
    // const result3 = await YoutubePlayerWeb.destroy('youtube-player1103');
    // const result4 = await YoutubePlayerWeb.destroy('youtube-player1104');
    // const result5 = await YoutubePlayerWeb.destroy('youtube-player1105');
    // const result6 = await YoutubePlayerWeb.destroy('youtube-player1106');
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
