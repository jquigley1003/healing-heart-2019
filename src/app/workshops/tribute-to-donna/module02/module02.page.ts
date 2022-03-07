import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { YoutubePlayerWeb } from 'capacitor-youtube-player'; // Web version

@Component({
  selector: 'app-module02',
  templateUrl: './module02.page.html',
  styleUrls: ['./module02.page.scss'],
})
export class Module02Page implements OnInit, AfterViewInit {
  @ViewChild('lovingYourselfAudio') lovingYourselfAudioRef: ElementRef<HTMLAudioElement>;

  completedModule: boolean;
  showCompleteBtn: boolean;
  showIncompleteBtn = true;
  assignment0201: boolean;
  assingment0202: boolean;
  assingment0203: boolean;
  assingment0204: boolean;
  assingment0205: boolean;
  assingment0206: boolean;
  assingment0207: boolean;
  assingment0208: boolean;
  audioDuration0201: number;

  constructor() { }

  ngOnInit() {
  }

  async ngAfterViewInit() {
    this.initializeYoutubePlayerPluginWeb();
    this.lovingYourselfAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0201 = this.lovingYourselfAudioRef.nativeElement.duration;
    };
  }


  async initializeYoutubePlayerPluginWeb() {
    const options1 = {playerId: 'youtube-player0201', playerSize: {}, videoId: 'XLFEvHWD_NE'};
    const result1 = await YoutubePlayerWeb.initialize(options1);
  }

  async destroyYoutubePlayerPluginWeb() {
    const result1 = await YoutubePlayerWeb.destroy('youtube-player0201');
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
