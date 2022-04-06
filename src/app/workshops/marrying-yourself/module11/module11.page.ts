import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { YoutubePlayerWeb } from 'capacitor-youtube-player'; // Web version
import { gsap } from 'gsap';

@Component({
  selector: 'app-module11',
  templateUrl: './module11.page.html',
  styleUrls: ['./module11.page.scss'],
})
export class Module11Page implements OnInit, AfterViewInit {
  @ViewChild('introModule11Audio') introModule11AudioRef: ElementRef<HTMLAudioElement>;
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
  audioDuration1101: number;
  audioDuration1102: number;
  audioDuration1103: number;
  audioDuration1104: number;
  audioDuration1105: number;
  audioDuration1106: number;
  audioDuration1107: number;
  audioDuration1108: number;
  audioDuration1109: number;
  audioDuration1110: number;
  audioDuration1111: number;
  audioDuration1112: number;
  audioDuration1113: number;
  audioDuration1114: number;
  audioDuration1115: number;
  audioDuration1116: number;
  audioDuration1117: number;
  audioDuration1118: number;
  audioDuration1119: number;
  audioDuration1120: number;
  audioDuration1121: number;
  audioDuration1122: number;
  audioDuration1123: number;
  audioDuration1124: number;
  audioDuration1125: number;
  audioDuration1126: number;
  audioDuration1127: number;
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
    this.introModule11AudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1101 = this.introModule11AudioRef.nativeElement.duration;
    };
    this.introTo4ArchetypesAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1102 = this.introTo4ArchetypesAudioRef.nativeElement.duration;
    };
    this.theLoverAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1103 = this.theLoverAudioRef.nativeElement.duration;
    };
    this.shadowAspectLoverAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1104 = this.shadowAspectLoverAudioRef.nativeElement.duration;
    };
    this.journalingLoverAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1105 = this.journalingLoverAudioRef.nativeElement.duration;
    };
    this.feastingOnaMealAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1106 = this.feastingOnaMealAudioRef.nativeElement.duration;
    };
    // this.sensualExperienceAudioRef.nativeElement.onloadedmetadata = (event) => {
    //   this.audioDuration1107 = this.sensualExperienceAudioRef.nativeElement.duration;
    // };
    this.tonyLoverAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1108 = this.tonyLoverAudioRef.nativeElement.duration;
    };
    this.theWarriorAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1109 = this.theWarriorAudioRef.nativeElement.duration;
    };
    this.shadowAspectWarriorAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1110 = this.shadowAspectWarriorAudioRef.nativeElement.duration;
    };
    this.positiveWarriorModelAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1111 = this.positiveWarriorModelAudioRef.nativeElement.duration;
    };
    this.tonyWarriorAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1112 = this.tonyWarriorAudioRef.nativeElement.duration;
    };
    this.theMagicianAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1113 = this.theMagicianAudioRef.nativeElement.duration;
    };
    this.shadowAspectMagicianAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1114 = this.shadowAspectMagicianAudioRef.nativeElement.duration;
    };
    this.chooseMentorAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1115 = this.chooseMentorAudioRef.nativeElement.duration;
    };
    this.beaMentorAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1116 = this.beaMentorAudioRef.nativeElement.duration;
    };
    this.riteOfPassageAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1117 = this.riteOfPassageAudioRef.nativeElement.duration;
    };
    this.sacredSpaceAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1118 = this.sacredSpaceAudioRef.nativeElement.duration;
    };
    this.tonyMagicianAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1119 = this.tonyMagicianAudioRef.nativeElement.duration;
    };
    this.theKingAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1120 = this.theKingAudioRef.nativeElement.duration;
    };
    this.shadowAspectKingAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1121 = this.shadowAspectKingAudioRef.nativeElement.duration;
    };
    this.recognizeKingAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1122 = this.recognizeKingAudioRef.nativeElement.duration;
    };
    this.practiceKingAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1123 = this.practiceKingAudioRef.nativeElement.duration;
    };
    this.verticalAlignmentAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1124 = this.verticalAlignmentAudioRef.nativeElement.duration;
    };
    this.tonyKingAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1125 = this.tonyKingAudioRef.nativeElement.duration;
    };
    this.integrationArchetypesAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1126 = this.integrationArchetypesAudioRef.nativeElement.duration;
    };
    this.viewingIntegrationAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1127 = this.viewingIntegrationAudioRef.nativeElement.duration;
    };
  }

  async initializeYoutubePlayerPluginWeb() {
    const player1 = {playerId: 'youtube-player1101', playerSize: {width: 640, height: 360}, videoId: 'AmPZH5HRpZg'};
    const result1 = await YoutubePlayerWeb.initialize(player1);
    const player2 = {playerId: 'youtube-player1102', playerSize: {width: 640, height: 360}, videoId: '5rT--p_cLOc'};
    const result2 = await YoutubePlayerWeb.initialize(player2);
  }

  async destroyYoutubePlayerPluginWeb() {
    const result1 = await YoutubePlayerWeb.destroy('youtube-player1101');
    const result2 = await YoutubePlayerWeb.destroy('youtube-player1102');
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
