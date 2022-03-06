import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { YoutubePlayerWeb } from 'capacitor-youtube-player'; // Web version

@Component({
  selector: 'app-module05',
  templateUrl: './module05.page.html',
  styleUrls: ['./module05.page.scss'],
})
export class Module05Page implements OnInit, AfterViewInit {
  @ViewChild('scripting5StepsAudio') scripting5StepsAudioRef: ElementRef<HTMLAudioElement>;

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
  audioDuration0501: number;

  constructor() { }

  ngOnInit() {
  }

  async ngAfterViewInit() {
    this.initializeYoutubePlayerPluginWeb();
    this.scripting5StepsAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0501 = this.scripting5StepsAudioRef.nativeElement.duration;
    };
  }


  async initializeYoutubePlayerPluginWeb() {
    const options1 = {playerId: 'youtube-player0501', playerSize: {}, videoId: 'c_X_sPNUDes'};
    const result1 = await YoutubePlayerWeb.initialize(options1);
  }

  async destroyYoutubePlayerPluginWeb() {
    const result1 = await YoutubePlayerWeb.destroy('youtube-player0501');
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
