import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { YoutubePlayerWeb } from 'capacitor-youtube-player'; // Web version
import Player from '@vimeo/player';

@Component({
  selector: 'app-module01',
  templateUrl: './module01.page.html',
  styleUrls: ['./module01.page.scss'],
})
export class Module01Page implements OnInit {
  @ViewChild('weedOutButsAudio') weedOutButsAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('listTheButsAudio') listTheButsAudioRef: ElementRef<HTMLAudioElement>;
  // @ViewChild('connectedAudio') connectedAudioRef: ElementRef<HTMLAudioElement>;
  // @ViewChild('revelAudio') revelAudioRef: ElementRef<HTMLAudioElement>;
  // @ViewChild('beginningAudio') beginningAudioRef: ElementRef<HTMLAudioElement>;
  // @ViewChild('mudraAudio') mudraAudioRef: ElementRef<HTMLAudioElement>;
  // @ViewChild('practices01Audio') practices01AudioRef: ElementRef<HTMLAudioElement>;

  completedModule: boolean;
  showCompleteBtn: boolean;
  showIncompleteBtn = true;
  assignment0101: boolean;
  assingment0102: boolean;
  assingment0103: boolean;
  assingment0104: boolean;
  assingment0105: boolean;
  assingment0106: boolean;
  assingment0107: boolean;
  assingment0108: boolean;
  assingment0109: boolean;
  assingment0110: boolean;
  audioDuration0101: number;
  audioDuration0102: number;
 

  constructor() { }

  ngOnInit() {
  }

  async ngAfterViewInit() {
    this.initializeYoutubePlayerPluginWeb();
    this.weedOutButsAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0101 = this.weedOutButsAudioRef.nativeElement.duration;
    };
  }


  async initializeYoutubePlayerPluginWeb() {
    // const options1 = {playerId: 'youtube-player1', playerSize: {}, videoId: 'Dou2JUmogvU'};
    // const result1 = await YoutubePlayerWeb.initialize(options1);
    // const options2 = {playerId: 'youtube-player2', playerSize: {width: 640, height: 360}, videoId: 'aTq2cMQpPeY'};
    // const result2 = await YoutubePlayerWeb.initialize(options2);
    // const options3 = {playerId: 'youtube-player3', playerSize: {width: 640, height: 360}, videoId: 'HpvK9Af4aiA'};
    // const result3 = await YoutubePlayerWeb.initialize(options3);
    // const options4 = {playerId: 'youtube-player4', playerSize: {width: 640, height: 360}, videoId: 'P3fIZuW9P_M'};
    // const result4 = await YoutubePlayerWeb.initialize(options4);
    // const options5 = {playerId: 'youtube-player5', playerSize: {width: 640, height: 360}, videoId: 'GWIhP1_75p4'};
    // const result5 = await YoutubePlayerWeb.initialize(options5);
    // const options6 = {playerId: 'youtube-player6', playerSize: {width: 640, height: 360}, videoId: 'aeKYip-sBjM'};
    // const result6 = await YoutubePlayerWeb.initialize(options6);
  }

  async destroyYoutubePlayerPluginWeb() {
    // const result1 = await YoutubePlayerWeb.destroy('youtube-player1');
    // const result2 = await YoutubePlayerWeb.destroy('youtube-player2');
    // const result3 = await YoutubePlayerWeb.destroy('youtube-player3');
    // const result4 = await YoutubePlayerWeb.destroy('youtube-player4');
    // const result5 = await YoutubePlayerWeb.destroy('youtube-player5');
    // const result6 = await YoutubePlayerWeb.destroy('youtube-player6');
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
  }
}
