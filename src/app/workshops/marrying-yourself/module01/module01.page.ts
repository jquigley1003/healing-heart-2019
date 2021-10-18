import { AfterViewInit, Component, OnInit } from '@angular/core';

import { YoutubePlayerWeb } from 'capacitor-youtube-player'; // Web version
import SwiperCore, { SwiperOptions, EffectCube } from 'swiper';
SwiperCore.use([EffectCube]);
@Component({
  selector: 'app-module01',
  templateUrl: './module01.page.html',
  styleUrls: ['./module01.page.scss'],
})
export class Module01Page implements OnInit, AfterViewInit {
  config: SwiperOptions = {
    pagination: true,
    effect: 'cube',
  }

  completedModule: boolean;
  showCompleteBtn: boolean;
  showIncompleteBtn = true;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.initializeYoutubePlayerPluginWeb();
  }

  async initializeYoutubePlayerPluginWeb() {
    const options1 = {playerId: 'youtube-player1', playerSize: {width: 640, height: 360}, videoId: 'Dou2JUmogvU'};
    const result1 = await YoutubePlayerWeb.initialize(options1);
    const options2 = {playerId: 'youtube-player2', playerSize: {width: 640, height: 360}, videoId: 'aTq2cMQpPeY'};
    const result2 = await YoutubePlayerWeb.initialize(options2);
    const options3 = {playerId: 'youtube-player3', playerSize: {width: 640, height: 360}, videoId: 'HpvK9Af4aiA'};
    const result3 = await YoutubePlayerWeb.initialize(options3);
    const options4 = {playerId: 'youtube-player4', playerSize: {width: 640, height: 360}, videoId: 'P3fIZuW9P_M'};
    const result4 = await YoutubePlayerWeb.initialize(options4);
    const options5 = {playerId: 'youtube-player5', playerSize: {width: 640, height: 360}, videoId: 'GWIhP1_75p4'};
    const result5 = await YoutubePlayerWeb.initialize(options5);
    const options6 = {playerId: 'youtube-player6', playerSize: {width: 640, height: 360}, videoId: 'aeKYip-sBjM'};
    const result6 = await YoutubePlayerWeb.initialize(options6);
    const options7 = {playerId: 'youtube-player7', playerSize: {width: 640, height: 360}, videoId: '4xfusryXtrI'};
    const result7 = await YoutubePlayerWeb.initialize(options7);

    
  }

  async destroyYoutubePlayerPluginWeb() {
    const result1 = await YoutubePlayerWeb.destroy('youtube-player1');
    const result2 = await YoutubePlayerWeb.destroy('youtube-player2');
    const result3 = await YoutubePlayerWeb.destroy('youtube-player3');
    const result4 = await YoutubePlayerWeb.destroy('youtube-player4');
    const result5 = await YoutubePlayerWeb.destroy('youtube-player5');
    const result6 = await YoutubePlayerWeb.destroy('youtube-player6');
    const result7 = await YoutubePlayerWeb.destroy('youtube-player7');
    console.log('destroyYoutubePlayer1', result1);
    console.log('destroyYoutubePlayer2', result2);
    console.log('destroyYoutubePlayer3', result3);
    console.log('destroyYoutubePlayer4', result4);
    console.log('destroyYoutubePlayer5', result5);
    console.log('destroyYoutubePlayer6', result6);
    console.log('destroyYoutubePlayer6', result7);
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

}
