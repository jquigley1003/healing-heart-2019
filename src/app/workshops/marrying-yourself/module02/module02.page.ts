import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { YoutubePlayerWeb } from 'capacitor-youtube-player'; // Web version

@Component({
  selector: 'app-module02',
  templateUrl: './module02.page.html',
  styleUrls: ['./module02.page.scss'],
})
export class Module02Page implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('codependencyAudio') codependencyAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('selfBetrayalAudio') selfBetrayalAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('retrieving01Audio') retrieving01AudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('retrieving02Audio') retrieving02AudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('blossomingAudio') blossomingAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('marryingMyselfAudio') marryingMyselfAudioRef: ElementRef<HTMLAudioElement>;

  completedModule: boolean;
  showCompleteBtn: boolean;
  showIncompleteBtn = true;
  audioDuration201: number;
  audioDuration202: number;
  audioDuration203: number;
  audioDuration204: number;
  audioDuration206: number;
  audioDuration207: number;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.initializeYoutubePlayerPluginWeb();
    this.codependencyAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration201 = this.codependencyAudioRef.nativeElement.duration;
    };
    this.selfBetrayalAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration202 = this.selfBetrayalAudioRef.nativeElement.duration;
    };
    this.retrieving01AudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration203 = this.retrieving01AudioRef.nativeElement.duration;
    };
    this.retrieving02AudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration204 = this.retrieving02AudioRef.nativeElement.duration;
    };
    this.blossomingAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration206 = this.blossomingAudioRef.nativeElement.duration;
    };
    this.marryingMyselfAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration207 = this.marryingMyselfAudioRef.nativeElement.duration;
    };
  }

  async initializeYoutubePlayerPluginWeb() {
    const player1 = {playerId: 'youtube-player2-1', playerSize: {width: 640, height: 360}, videoId: '46f6qgo7EYA'};
    const result1 = await YoutubePlayerWeb.initialize(player1);
    const player2 = {playerId: 'youtube-player2-2', playerSize: {width: 640, height: 360}, videoId: 'r9VexoTZnrw'};
    const result2 = await YoutubePlayerWeb.initialize(player2);
    const player3 = {playerId: 'youtube-player2-3', playerSize: {width: 640, height: 360}, videoId: 'C6R8P1hhgW4'};
    const result3 = await YoutubePlayerWeb.initialize(player3);
    const player4 = {playerId: 'youtube-player2-4', playerSize: {width: 640, height: 360}, videoId: 'gJUrhzGejTM'};
    const result4 = await YoutubePlayerWeb.initialize(player4);
    const player5 = {playerId: 'youtube-player2-5', playerSize: {width: 640, height: 360}, videoId: 'D4HxOinvaos'};
    const result5 = await YoutubePlayerWeb.initialize(player5);
    const player6 = {playerId: 'youtube-player2-6', playerSize: {width: 640, height: 360}, videoId: 'IYzlVDlE72w'};
    const result6 = await YoutubePlayerWeb.initialize(player6);
    const player8 = {playerId: 'youtube-player2-8', playerSize: {width: 640, height: 360}, videoId: 'SmbmeOgWsqE'};
    const result8 = await YoutubePlayerWeb.initialize(player8);
  }

  async destroyYoutubePlayerPluginWeb() {
    const result1 = await YoutubePlayerWeb.destroy('youtube-player2-1');
    const result2 = await YoutubePlayerWeb.destroy('youtube-player2-2');
    const result3 = await YoutubePlayerWeb.destroy('youtube-player2-3');
    const result4 = await YoutubePlayerWeb.destroy('youtube-player2-4');
    const result5 = await YoutubePlayerWeb.destroy('youtube-player2-5');
    const result6 = await YoutubePlayerWeb.destroy('youtube-player2-6');
    const result8 = await YoutubePlayerWeb.destroy('youtube-player2-8');
    // console.log('destroyYoutubePlayer2-1', result1);
    // console.log('destroyYoutubePlayer2-2', result2);
    // console.log('destroyYoutubePlayer2-3', result3);
    // console.log('destroyYoutubePlayer2-4', result4);
    // console.log('destroyYoutubePlayer2-5', result5);
    // console.log('destroyYoutubePlayer2-6', result6);
    // console.log('destroyYoutubePlayer2-7', result7);
    // console.log('destroyYoutubePlayer2-8', result8);
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

  ngOnDestroy() {
    this.destroyYoutubePlayerPluginWeb();
  }

}
