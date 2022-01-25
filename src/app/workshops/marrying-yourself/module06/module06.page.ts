import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { YoutubePlayerWeb } from 'capacitor-youtube-player'; // Web version

@Component({
  selector: 'app-module06',
  templateUrl: './module06.page.html',
  styleUrls: ['./module06.page.scss'],
})
export class Module06Page implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('introModule06Audio') introModule06AudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('tamingYourMindAudio') tamingYourMindAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('howToTameYourMindAudio') howToTameYourMindAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('alphaMindAudio') alphaMindAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('practiceTamingMindAudio') practiceTamingMindAudioRef: ElementRef<HTMLAudioElement>;

  completedModule: boolean;
  showCompleteBtn: boolean;
  showIncompleteBtn = true;
  audioDuration601: number;
  audioDuration602: number;
  audioDuration603: number;
  audioDuration604: number;
  audioDuration605: number;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.initializeYoutubePlayerPluginWeb();
    this.introModule06AudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration601 = this.introModule06AudioRef.nativeElement.duration;
    };
    this.tamingYourMindAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration602 = this.tamingYourMindAudioRef.nativeElement.duration;
    };
    this.howToTameYourMindAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration603 = this.howToTameYourMindAudioRef.nativeElement.duration;
    };
    this.alphaMindAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration604 = this.alphaMindAudioRef.nativeElement.duration;
    };
    this.practiceTamingMindAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration605 = this.practiceTamingMindAudioRef.nativeElement.duration;
    };
  }

  async initializeYoutubePlayerPluginWeb() {
    const player2 = {playerId: 'youtube-player0602', playerSize: {width: 640, height: 360}, videoId: '-jc8tacP520'};
    const result2 = await YoutubePlayerWeb.initialize(player2);
    const player3 = {playerId: 'youtube-player0603', playerSize: {width: 640, height: 360}, videoId: 'k4F7dzyGqnE'};
    const result3 = await YoutubePlayerWeb.initialize(player3);
    const player4 = {playerId: 'youtube-player0604', playerSize: {width: 640, height: 360}, videoId: 'z5PymkMh0bo'};
    const result4 = await YoutubePlayerWeb.initialize(player4);
    const player5 = {playerId: 'youtube-player0605', playerSize: {width: 640, height: 360}, videoId: 'gEv-lfi6vY0'};
    const result5 = await YoutubePlayerWeb.initialize(player5);
    const player6 = {playerId: 'youtube-player0606', playerSize: {width: 640, height: 360}, videoId: 'EHw170UPsyk'};
    const result6 = await YoutubePlayerWeb.initialize(player6);
    const player7 = {playerId: 'youtube-player0607', playerSize: {width: 640, height: 360}, videoId: 'ynVTqHYg5A4'};
    const result7 = await YoutubePlayerWeb.initialize(player7);
  }

  async destroyYoutubePlayerPluginWeb() {
    const result2 = await YoutubePlayerWeb.destroy('youtube-player0602');
    const result3 = await YoutubePlayerWeb.destroy('youtube-player0603');
    const result4 = await YoutubePlayerWeb.destroy('youtube-player0604');
    const result5 = await YoutubePlayerWeb.destroy('youtube-player0605');
    const result6 = await YoutubePlayerWeb.destroy('youtube-player0606');
    const result7 = await YoutubePlayerWeb.destroy('youtube-player0607');
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
