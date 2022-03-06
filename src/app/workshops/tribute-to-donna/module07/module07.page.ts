import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { YoutubePlayerWeb } from 'capacitor-youtube-player'; // Web version

@Component({
  selector: 'app-module07',
  templateUrl: './module07.page.html',
  styleUrls: ['./module07.page.scss'],
})
export class Module07Page implements OnInit, AfterViewInit {
  @ViewChild('introHaveItAllAudio') introHaveItAllAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('guidedImageryAudio') guidedImageryAudioRef: ElementRef<HTMLAudioElement>;

  completedModule: boolean;
  showCompleteBtn: boolean;
  showIncompleteBtn = true;
  assignment0701: boolean;
  assingment0702: boolean;
  assingment0703: boolean;
  
  audioDuration0701: number;
  audioDuration0702: number;
  
  constructor() { }

  ngOnInit() {
  }

  async ngAfterViewInit() {
    this.initializeYoutubePlayerPluginWeb();
    this.introHaveItAllAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0701 = this.introHaveItAllAudioRef.nativeElement.duration;
    };
    this.guidedImageryAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0702 = this.guidedImageryAudioRef.nativeElement.duration;
    };
  }


  async initializeYoutubePlayerPluginWeb() {
    const options1 = {playerId: 'youtube-player0701', playerSize: {}, videoId: 'IYzlVDlE72w'};
    const result1 = await YoutubePlayerWeb.initialize(options1);
  }

  async destroyYoutubePlayerPluginWeb() {
    const result1 = await YoutubePlayerWeb.destroy('youtube-player0701');
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
