import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { YoutubePlayerWeb } from 'capacitor-youtube-player'; // Web version

@Component({
  selector: 'app-module03',
  templateUrl: './module03.page.html',
  styleUrls: ['./module03.page.scss'],
})
export class Module03Page implements OnInit, AfterViewInit {
  @ViewChild('codependencyAudio') codependencyAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('selfBetrayalAudio') selfBetrayalAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('retrieving01Audio') retrieving01AudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('retrieving02Audio') retrieving02AudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('blossomingAudio') blossomingAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('marryingMyselfAudio') marryingMyselfAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('myExperienceAudio') myExperienceAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('assignmentYourStoryAudio') assignmentYourStoryAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('embarkingOnMYJAudio') embarkingOnMYJAudioRef: ElementRef<HTMLAudioElement>;

  completedModule: boolean;
  showCompleteBtn: boolean;
  showIncompleteBtn = true;
  audioDuration0301: number;
  audioDuration0302: number;
  audioDuration0303: number;
  audioDuration0304: number;
  audioDuration0305: number;
  audioDuration0306: number;
  audioDuration0307: number;
  audioDuration0308: number;
  audioDuration0309: number;
  audioDuration0310: number;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.initializeYoutubePlayerPluginWeb();
    this.codependencyAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0301 = this.codependencyAudioRef.nativeElement.duration;
    };
    this.selfBetrayalAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0302 = this.selfBetrayalAudioRef.nativeElement.duration;
    };
    this.retrieving01AudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0303 = this.retrieving01AudioRef.nativeElement.duration;
    };
    this.retrieving02AudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0304 = this.retrieving02AudioRef.nativeElement.duration;
    };
    this.blossomingAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0306 = this.blossomingAudioRef.nativeElement.duration;
    };
    this.marryingMyselfAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0307 = this.marryingMyselfAudioRef.nativeElement.duration;
    };
    this.myExperienceAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0308 = this.myExperienceAudioRef.nativeElement.duration;
    };
    this.assignmentYourStoryAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0309 = this.assignmentYourStoryAudioRef.nativeElement.duration;
    };
    this.embarkingOnMYJAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0310 = this.embarkingOnMYJAudioRef.nativeElement.duration;
    };
  }

  async initializeYoutubePlayerPluginWeb() {
    const player1 = {playerId: 'youtube-player0301', playerSize: {width: 640, height: 360}, videoId: '46f6qgo7EYA'};
    const result1 = await YoutubePlayerWeb.initialize(player1);
    const player2 = {playerId: 'youtube-player0302', playerSize: {width: 640, height: 360}, videoId: 'r9VexoTZnrw'};
    const result2 = await YoutubePlayerWeb.initialize(player2);
    const player3 = {playerId: 'youtube-player0303', playerSize: {width: 640, height: 360}, videoId: 'C6R8P1hhgW4'};
    const result3 = await YoutubePlayerWeb.initialize(player3);
    const player4 = {playerId: 'youtube-player0304', playerSize: {width: 640, height: 360}, videoId: 'gJUrhzGejTM'};
    const result4 = await YoutubePlayerWeb.initialize(player4);
    const player5 = {playerId: 'youtube-player0305', playerSize: {width: 640, height: 360}, videoId: 'D4HxOinvaos'};
    const result5 = await YoutubePlayerWeb.initialize(player5);
    const player6 = {playerId: 'youtube-player0306', playerSize: {width: 640, height: 360}, videoId: 'IYzlVDlE72w'};
    const result6 = await YoutubePlayerWeb.initialize(player6);
    const player8 = {playerId: 'youtube-player0308', playerSize: {width: 640, height: 360}, videoId: 'SmbmeOgWsqE'};
    const result8 = await YoutubePlayerWeb.initialize(player8);
  }

  async destroyYoutubePlayerPluginWeb() {
    const result1 = await YoutubePlayerWeb.destroy('youtube-player0301');
    const result2 = await YoutubePlayerWeb.destroy('youtube-player0302');
    const result3 = await YoutubePlayerWeb.destroy('youtube-player0303');
    const result4 = await YoutubePlayerWeb.destroy('youtube-player0304');
    const result5 = await YoutubePlayerWeb.destroy('youtube-player0305');
    const result6 = await YoutubePlayerWeb.destroy('youtube-player0306');
    const result8 = await YoutubePlayerWeb.destroy('youtube-player0308');
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
    // gsap.set(".dark", {opacity:1});
    // gsap.set(".title", {scale:1});
    // if(this.tl1 != null) {
    //   this.tl1.restart();
    // }
  }
}
