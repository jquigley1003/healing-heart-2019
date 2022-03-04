import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { YoutubePlayerWeb } from 'capacitor-youtube-player'; // Web version

@Component({
  selector: 'app-module06',
  templateUrl: './module06.page.html',
  styleUrls: ['./module06.page.scss'],
})
export class Module06Page implements OnInit, AfterViewInit {
  @ViewChild('attractionAudio') attractionAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('lawOfVibrationAudio') lawOfVibrationAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('developingAttractionAudio') developingAttractionAudioRef: ElementRef<HTMLAudioElement>;

  completedModule: boolean;
  showCompleteBtn: boolean;
  showIncompleteBtn = true;
  assignment0601: boolean;
  assingment0602: boolean;
  
  audioDuration0601: number;
  audioDuration0602: number;
  audioDuration0603: number;

  constructor() { }

  ngOnInit() {
  }

  async ngAfterViewInit() {
    this.initializeYoutubePlayerPluginWeb();
    this.attractionAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0601 = this.attractionAudioRef.nativeElement.duration;
    };
    this.lawOfVibrationAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0602 = this.lawOfVibrationAudioRef.nativeElement.duration;
    };
    this.developingAttractionAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0603 = this.developingAttractionAudioRef.nativeElement.duration;
    };
  }


  async initializeYoutubePlayerPluginWeb() {
    // const options1 = {playerId: 'youtube-player0501', playerSize: {}, videoId: 'c_X_sPNUDes'};
    // const result1 = await YoutubePlayerWeb.initialize(options1);
  }

  async destroyYoutubePlayerPluginWeb() {
    // const result1 = await YoutubePlayerWeb.destroy('youtube-player0501');
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
