import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { YoutubePlayerWeb } from 'capacitor-youtube-player'; // Web version
import Player from '@vimeo/player';
import { gsap } from 'gsap';
@Component({
  selector: 'app-module13',
  templateUrl: './module13.page.html',
  styleUrls: ['./module13.page.scss'],
})
export class Module13Page implements OnInit, AfterViewInit {

  @ViewChild('parentingYourselfWellAudio') parentingYourselfWellAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('transactionalAnalysisAudio') transactionalAnalysisAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('selfInquiryTALensAudio') selfInquiryTALensAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('positiveParentAudio') positiveParentAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('placeNurturingAudio') placeNurturingAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('supportProtectionAudio') supportProtectionAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('setContainStructureAudio') setContainStructureAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('respectBondConsistentAudio') respectBondConsistentAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('practicePlaceAudio') practicePlaceAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('practiceNurturanceAudio') practiceNurturanceAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('practiceSupportAudio') practiceSupportAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('practiceProtectionAudio') practiceProtectionAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('practiceScreeningAudio') practiceScreeningAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('practiceShieldingAudio') practiceShieldingAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('practiceLimitsAudio') practiceLimitsAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('practiceContainmentAudio') practiceContainmentAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('practiceStructuringTimeAudio') practiceStructuringTimeAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('practiceRespectAudio') practiceRespectAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('practiceBondingAudio') practiceBondingAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('practiceCPAAudio') practiceCPAAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('acknowledgeAudio') acknowledgeAudioRef: ElementRef<HTMLAudioElement>;

  @ViewChild('settingLimitsVimeo') settingLimitsVimeoRef: ElementRef;
  // @ViewChild('moreThoughtsVimeo') moreThoughtsVimeoRef: ElementRef;


  completedModule: boolean;
  showCompleteBtn: boolean;
  showIncompleteBtn = true;
  assignment1301: boolean;
  assignment1302: boolean;
  assignment1303: boolean;
  assignment1304: boolean;
  assignment1305: boolean;
  assignment1306: boolean;
  assignment1307: boolean;
  assignment1308: boolean;
  assignment1309: boolean;
  assignment1310: boolean;

  audioDuration1301: number;
  audioDuration1302: number;
  audioDuration1302b: number;
  audioDuration1303: number;
  audioDuration1304: number;
  audioDuration1305: number;
  audioDuration1306: number;
  audioDuration1307: number;
  audioDuration1308: number;
  audioDuration1309: number;
  audioDuration1310: number;
  audioDuration1311: number;
  audioDuration1312: number;
  audioDuration1313: number;
  audioDuration1314: number;
  audioDuration1315: number;
  audioDuration1316: number;
  audioDuration1317: number;
  audioDuration1318: number;
  audioDuration1319: number;
  audioDuration1320: number;
  
  settingLimitsVimeoPlayer: Player;
  // moreThoughtsVimeoPlayer: Player;
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
    this.parentingYourselfWellAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1301 = this.parentingYourselfWellAudioRef.nativeElement.duration;
    };
    this.transactionalAnalysisAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1302 = this.transactionalAnalysisAudioRef.nativeElement.duration;
    };
    this.selfInquiryTALensAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1302b = this.selfInquiryTALensAudioRef.nativeElement.duration;
    };
    this.positiveParentAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1303 = this.positiveParentAudioRef.nativeElement.duration;
    };
    this.placeNurturingAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1304 = this.placeNurturingAudioRef.nativeElement.duration;
    };
    this.supportProtectionAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1305 = this.supportProtectionAudioRef.nativeElement.duration;
    };
    this.setContainStructureAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1306 = this.setContainStructureAudioRef.nativeElement.duration;
    };
    this.respectBondConsistentAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1307 = this.respectBondConsistentAudioRef.nativeElement.duration;
    };
    this.practicePlaceAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1308 = this.practicePlaceAudioRef.nativeElement.duration;
    };
    this.practiceNurturanceAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1309 = this.practiceNurturanceAudioRef.nativeElement.duration;
    };
    this.practiceSupportAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1310 = this.practiceSupportAudioRef.nativeElement.duration;
    };
    this.practiceProtectionAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1311 = this.practiceProtectionAudioRef.nativeElement.duration;
    };
    this.practiceScreeningAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1312 = this.practiceScreeningAudioRef.nativeElement.duration;
    };
    this.practiceShieldingAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1313 = this.practiceShieldingAudioRef.nativeElement.duration;
    };
    this.practiceLimitsAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1314 = this.practiceLimitsAudioRef.nativeElement.duration;
    };
    this.practiceContainmentAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1315 = this.practiceContainmentAudioRef.nativeElement.duration;
    };
    this.practiceStructuringTimeAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1316 = this.practiceStructuringTimeAudioRef.nativeElement.duration;
    };
    this.practiceRespectAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1317 = this.practiceRespectAudioRef.nativeElement.duration;
    };
    this.practiceBondingAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1318 = this.practiceBondingAudioRef.nativeElement.duration;
    };
    this.practiceCPAAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1319 = this.practiceCPAAudioRef.nativeElement.duration;
    };
    this.acknowledgeAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration1320 = this.acknowledgeAudioRef.nativeElement.duration;
    };
    
    
    this.settingLimitsVimeoPlayer = new Player(this.settingLimitsVimeoRef.nativeElement, {
      id: 691963781,
      height: 450
    });
    // this.moreThoughtsVimeoPlayer = new Player(this.moreThoughtsVimeoRef.nativeElement, {
    //   id: 691095098,
    //   height: 350
    // });
  }

  async initializeYoutubePlayerPluginWeb() {
    const player1 = {playerId: 'youtube-player1301', playerSize: {width: 640, height: 360}, videoId: 'RKdYGNQGqFM'};
    const result1 = await YoutubePlayerWeb.initialize(player1);
    const player2 = {playerId: 'youtube-player1302', playerSize: {width: 640, height: 360}, videoId: 'JPQcvVvtv3k'};
    const result2 = await YoutubePlayerWeb.initialize(player2);
    const player3 = {playerId: 'youtube-player1303', playerSize: {width: 640, height: 360}, videoId: 'n9ZbnMV80IU'};
    const result3 = await YoutubePlayerWeb.initialize(player3);
    // const player4 = {playerId: 'youtube-player1104', playerSize: {width: 640, height: 360}, videoId: 'SmbmeOgWsqE'};
    // const result4 = await YoutubePlayerWeb.initialize(player4);
    // const player5 = {playerId: 'youtube-player1105', playerSize: {width: 640, height: 360}, videoId: 'E7pagLfV91E'};
    // const result5 = await YoutubePlayerWeb.initialize(player5);
    // const player6 = {playerId: 'youtube-player1106', playerSize: {width: 640, height: 360}, videoId: '9hbJtyxx7gA'};
    // const result6 = await YoutubePlayerWeb.initialize(player6);
  }

  async destroyYoutubePlayerPluginWeb() {
    const result1 = await YoutubePlayerWeb.destroy('youtube-player1301');
    const result2 = await YoutubePlayerWeb.destroy('youtube-player1302');
    const result3 = await YoutubePlayerWeb.destroy('youtube-player1303');
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
