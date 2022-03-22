import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { YoutubePlayerWeb } from 'capacitor-youtube-player'; // Web version
import Player from '@vimeo/player';
import { gsap } from 'gsap';

@Component({
  selector: 'app-module11',
  templateUrl: './module11.page.html',
  styleUrls: ['./module11.page.scss'],
})
export class Module11Page implements OnInit, AfterViewInit {
  @ViewChild('practicesRomancingAudio') practicesRomancingAudioRef: ElementRef<HTMLAudioElement>;
 
  @ViewChild('romancingYourselfVimeo') romancingYourselfVimeoRef: ElementRef;
  @ViewChild('moreThoughtsVimeo') moreThoughtsVimeoRef: ElementRef;


  completedModule: boolean;
  showCompleteBtn: boolean;
  showIncompleteBtn = true;
  audioDuration1101: number;
  
  romancingYourselfVimeoPlayer: Player;
  moreThoughtsVimeoPlayer: Player;
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
    this.practicesRomancingAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1101 = this.practicesRomancingAudioRef.nativeElement.duration;
    };
    
    this.romancingYourselfVimeoPlayer = new Player(this.romancingYourselfVimeoRef.nativeElement, {
      id: 691091632,
      height: 350
    });
    this.moreThoughtsVimeoPlayer = new Player(this.moreThoughtsVimeoRef.nativeElement, {
      id: 691095098,
      height: 350
    });
  }

  async initializeYoutubePlayerPluginWeb() {
    const player1 = {playerId: 'youtube-player1101', playerSize: {width: 640, height: 360}, videoId: 'MmOau-PMWJk'};
    const result1 = await YoutubePlayerWeb.initialize(player1);
    const player2 = {playerId: 'youtube-player1102', playerSize: {width: 640, height: 360}, videoId: 'bd9Ty1xLAeM'};
    const result2 = await YoutubePlayerWeb.initialize(player2);
    const player3 = {playerId: 'youtube-player1103', playerSize: {width: 640, height: 360}, videoId: 'LHhoqpgxFNo'};
    const result3 = await YoutubePlayerWeb.initialize(player3);
    const player4 = {playerId: 'youtube-player1104', playerSize: {width: 640, height: 360}, videoId: 'SmbmeOgWsqE'};
    const result4 = await YoutubePlayerWeb.initialize(player4);
    const player5 = {playerId: 'youtube-player1105', playerSize: {width: 640, height: 360}, videoId: 'E7pagLfV91E'};
    const result5 = await YoutubePlayerWeb.initialize(player5);
    const player6 = {playerId: 'youtube-player1106', playerSize: {width: 640, height: 360}, videoId: '9hbJtyxx7gA'};
    const result6 = await YoutubePlayerWeb.initialize(player6);
  }

  async destroyYoutubePlayerPluginWeb() {
    const result1 = await YoutubePlayerWeb.destroy('youtube-player1101');
    const result2 = await YoutubePlayerWeb.destroy('youtube-player1102');
    const result3 = await YoutubePlayerWeb.destroy('youtube-player1103');
    const result4 = await YoutubePlayerWeb.destroy('youtube-player1104');
    const result5 = await YoutubePlayerWeb.destroy('youtube-player1105');
    const result6 = await YoutubePlayerWeb.destroy('youtube-player1106');
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
