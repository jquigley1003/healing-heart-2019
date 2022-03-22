import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { YoutubePlayerWeb } from 'capacitor-youtube-player'; // Web version
import { gsap } from 'gsap';

@Component({
  selector: 'app-module10',
  templateUrl: './module10.page.html',
  styleUrls: ['./module10.page.scss'],
})
export class Module10Page implements OnInit, AfterViewInit {
  @ViewChild('introModule10Audio') introModule10AudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('introTo4ArchetypesAudio') introTo4ArchetypesAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('theLoverAudio') theLoverAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('shadowAspectLoverAudio') shadowAspectLoverAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('journalingLoverAudio') journalingLoverAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('feastingOnaMealAudio') feastingOnaMealAudioRef: ElementRef<HTMLAudioElement>;
  // @ViewChild('sensualExperienceAudio') sensualExperienceAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('tonyLoverAudio') tonyLoverAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('theWarriorAudio') theWarriorAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('shadowAspectWarriorAudio') shadowAspectWarriorAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('positiveWarriorModelAudio') positiveWarriorModelAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('tonyWarriorAudio') tonyWarriorAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('theMagicianAudio') theMagicianAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('shadowAspectMagicianAudio') shadowAspectMagicianAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('chooseMentorAudio') chooseMentorAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('beaMentorAudio') beaMentorAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('riteOfPassageAudio') riteOfPassageAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('sacredSpaceAudio') sacredSpaceAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('tonyMagicianAudio') tonyMagicianAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('theKingAudio') theKingAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('shadowAspectKingAudio') shadowAspectKingAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('recognizeKingAudio') recognizeKingAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('practiceKingAudio') practiceKingAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('verticalAlignmentAudio') verticalAlignmentAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('tonyKingAudio') tonyKingAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('integrationArchetypesAudio') integrationArchetypesAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('viewingIntegrationAudio') viewingIntegrationAudioRef: ElementRef<HTMLAudioElement>;

  completedModule: boolean;
  showCompleteBtn: boolean;
  showIncompleteBtn = true;
  audioDuration1001: number;
  audioDuration1002: number;
  audioDuration1003: number;
  audioDuration1004: number;
  audioDuration1005: number;
  audioDuration1006: number;
  audioDuration1007: number;
  audioDuration1008: number;
  audioDuration1009: number;
  audioDuration1010: number;
  audioDuration1011: number;
  audioDuration1012: number;
  audioDuration1013: number;
  audioDuration1014: number;
  audioDuration1015: number;
  audioDuration1016: number;
  audioDuration1017: number;
  audioDuration1018: number;
  audioDuration1019: number;
  audioDuration1020: number;
  audioDuration1021: number;
  audioDuration1022: number;
  audioDuration1023: number;
  audioDuration1024: number;
  audioDuration1025: number;
  audioDuration1026: number;
  audioDuration1027: number;
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
    this.introModule10AudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1001 = this.introModule10AudioRef.nativeElement.duration;
    };
    this.introTo4ArchetypesAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1002 = this.introTo4ArchetypesAudioRef.nativeElement.duration;
    };
    this.theLoverAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1003 = this.theLoverAudioRef.nativeElement.duration;
    };
    this.shadowAspectLoverAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1004 = this.shadowAspectLoverAudioRef.nativeElement.duration;
    };
    this.journalingLoverAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1005 = this.journalingLoverAudioRef.nativeElement.duration;
    };
    this.feastingOnaMealAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1006 = this.feastingOnaMealAudioRef.nativeElement.duration;
    };
    // this.sensualExperienceAudioRef.nativeElement.onloadedmetadata = (event) => {
    //   this.audioDuration1007 = this.sensualExperienceAudioRef.nativeElement.duration;
    // };
    this.tonyLoverAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1008 = this.tonyLoverAudioRef.nativeElement.duration;
    };
    this.theWarriorAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1009 = this.theWarriorAudioRef.nativeElement.duration;
    };
    this.shadowAspectWarriorAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1010 = this.shadowAspectWarriorAudioRef.nativeElement.duration;
    };
    this.positiveWarriorModelAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1011 = this.positiveWarriorModelAudioRef.nativeElement.duration;
    };
    this.tonyWarriorAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1012 = this.tonyWarriorAudioRef.nativeElement.duration;
    };
    this.theMagicianAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1013 = this.theMagicianAudioRef.nativeElement.duration;
    };
    this.shadowAspectMagicianAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1014 = this.shadowAspectMagicianAudioRef.nativeElement.duration;
    };
    this.chooseMentorAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1015 = this.chooseMentorAudioRef.nativeElement.duration;
    };
    this.beaMentorAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1016 = this.beaMentorAudioRef.nativeElement.duration;
    };
    this.riteOfPassageAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1017 = this.riteOfPassageAudioRef.nativeElement.duration;
    };
    this.sacredSpaceAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1018 = this.sacredSpaceAudioRef.nativeElement.duration;
    };
    this.tonyMagicianAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1019 = this.tonyMagicianAudioRef.nativeElement.duration;
    };
    this.theKingAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1020 = this.theKingAudioRef.nativeElement.duration;
    };
    this.shadowAspectKingAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1021 = this.shadowAspectKingAudioRef.nativeElement.duration;
    };
    this.recognizeKingAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1022 = this.recognizeKingAudioRef.nativeElement.duration;
    };
    this.practiceKingAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1023 = this.practiceKingAudioRef.nativeElement.duration;
    };
    this.verticalAlignmentAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1024 = this.verticalAlignmentAudioRef.nativeElement.duration;
    };
    this.tonyKingAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1025 = this.tonyKingAudioRef.nativeElement.duration;
    };
    this.integrationArchetypesAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1026 = this.integrationArchetypesAudioRef.nativeElement.duration;
    };
    this.viewingIntegrationAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1027 = this.viewingIntegrationAudioRef.nativeElement.duration;
    };
  }

  async initializeYoutubePlayerPluginWeb() {
    const player1 = {playerId: 'youtube-player1001', playerSize: {width: 640, height: 360}, videoId: 'AmPZH5HRpZg'};
    const result1 = await YoutubePlayerWeb.initialize(player1);
    const player2 = {playerId: 'youtube-player1002', playerSize: {width: 640, height: 360}, videoId: '5rT--p_cLOc'};
    const result2 = await YoutubePlayerWeb.initialize(player2);
  }

  async destroyYoutubePlayerPluginWeb() {
    const result1 = await YoutubePlayerWeb.destroy('youtube-player1001');
    const result2 = await YoutubePlayerWeb.destroy('youtube-player1002');
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
