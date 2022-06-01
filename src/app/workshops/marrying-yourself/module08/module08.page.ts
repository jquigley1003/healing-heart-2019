import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { YoutubePlayerWeb } from 'capacitor-youtube-player'; // Web version
import Player from '@vimeo/player';
import { gsap } from 'gsap';

@Component({
  selector: 'app-module08',
  templateUrl: './module08.page.html',
  styleUrls: ['./module08.page.scss'],
})
export class Module08Page implements AfterViewInit, OnInit {
  @ViewChild('introModule08Audio') introModule08AudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('innerWorkAudio') innerWorkAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('horizontalVerticalAudio') horizontalVerticalAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('selfRetrievalRitualAudio') selfRetrievalRitualAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('mettaMeditationAudio') mettaMeditationAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('theGuestHouseAudio') theGuestHouseAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('theInvitationAudio') theInvitationAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('sonataVimeo') sonataVimeoRef: ElementRef;
  @ViewChild('selfRetrievalDemoVimeo') selfRetrievalDemoVimeoRef: ElementRef;
  @ViewChild('introExercisesVimeo') introExercisesVimeoRef: ElementRef;


  completedModule: boolean;
  showCompleteBtn: boolean;
  showIncompleteBtn = true;
  audioDuration0801: number;
  audioDuration0802: number;
  audioDuration0803: number;
  audioDuration0804: number;
  audioDuration0805: number;
  audioDuration0806: number;
  audioDuration0807: number;
  sonataVimeoPlayer: Player;
  selfRetrievalDemoVimeoPlayer: Player;
  introExercisesVimeoPlayer: Player;
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
    this.introModule08AudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0801 = this.introModule08AudioRef.nativeElement.duration;
    };
    this.innerWorkAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0802 = this.innerWorkAudioRef.nativeElement.duration;
    };
    this.horizontalVerticalAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0803 = this.horizontalVerticalAudioRef.nativeElement.duration;
    };
    this.selfRetrievalRitualAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0804 = this.selfRetrievalRitualAudioRef.nativeElement.duration;
    };
    this.mettaMeditationAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0805 = this.mettaMeditationAudioRef.nativeElement.duration;
    };
    this.theGuestHouseAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0806 = this.theGuestHouseAudioRef.nativeElement.duration;
    };
    this.theInvitationAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0807 = this.theInvitationAudioRef.nativeElement.duration;
    };
  }

  async initializeYoutubePlayerPluginWeb() {
    const player1 = {playerId: 'youtube-player0801', playerSize: {width: 640, height: 360}, videoId: 'Xn676-fLq7I'};
    const result1 = await YoutubePlayerWeb.initialize(player1);
    const player2 = {playerId: 'youtube-player0802', playerSize: {width: 640, height: 360}, videoId: 'QUQsqBqxoR4'};
    const result2 = await YoutubePlayerWeb.initialize(player2);
    const player3 = {playerId: 'youtube-player0803', playerSize: {width: 640, height: 360}, videoId: 'QfpXSa3Au6I'};
    const result3 = await YoutubePlayerWeb.initialize(player3);
    const player4 = {playerId: 'youtube-player0804', playerSize: {width: 640, height: 360}, videoId: '6K6_Rkrq4U0'};
    const result4 = await YoutubePlayerWeb.initialize(player4);
    const player5 = {playerId: 'youtube-player0805', playerSize: {width: 640, height: 360}, videoId: 'gEv-lfi6vY0'};
    const result5 = await YoutubePlayerWeb.initialize(player5);
    const player6 = {playerId: 'youtube-player0806', playerSize: {width: 640, height: 360}, videoId: 'ynVTqHYg5A4'};
    const result6 = await YoutubePlayerWeb.initialize(player6);
    const player7 = {playerId: 'youtube-player0807', playerSize: {width: 640, height: 360}, videoId: 'D4HxOinvaos'};
    const result7 = await YoutubePlayerWeb.initialize(player7);
  }

  async initializeVimeoPlayer() {
    this.sonataVimeoPlayer = new Player(this.sonataVimeoRef.nativeElement, {
      id: 670040962,
      height: 350
    });
    this.selfRetrievalDemoVimeoPlayer = new Player(this.selfRetrievalDemoVimeoRef.nativeElement, {
      id: 670845671,
      height: 350
    });
    this.introExercisesVimeoPlayer = new Player(this.introExercisesVimeoRef.nativeElement, {
      id: 716134459,
      height: 350
    });
  }

  async destroyYoutubePlayerPluginWeb() {
    const result1 = await YoutubePlayerWeb.destroy('youtube-player0801');
    const result2 = await YoutubePlayerWeb.destroy('youtube-player0802');
    const result3 = await YoutubePlayerWeb.destroy('youtube-player0803');
    const result4 = await YoutubePlayerWeb.destroy('youtube-player0804');
    const result5 = await YoutubePlayerWeb.destroy('youtube-player0805');
    const result6 = await YoutubePlayerWeb.destroy('youtube-player0806');
    const result7 = await YoutubePlayerWeb.destroy('youtube-player0807');
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
    this.initializeVimeoPlayer();
    gsap.set(".dark", {opacity:1});
    gsap.set(".title", {scale:1});
    if(this.tl1 != null) {
      this.tl1.restart();
    }
  }
}
