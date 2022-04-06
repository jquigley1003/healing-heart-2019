import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { YoutubePlayerWeb } from 'capacitor-youtube-player'; // Web version
import { gsap } from 'gsap';

@Component({
  selector: 'app-module09',
  templateUrl: './module09.page.html',
  styleUrls: ['./module09.page.scss'],
})
export class Module09Page implements OnInit, AfterViewInit {
  @ViewChild('introModule09Audio') introModule09AudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('beingPresentAudio') beingPresentAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('bsaoAudio') bsaoAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('enjoymentAudio') enjoymentAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('livingTheDharmaAudio') livingTheDharmaAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('understandingYourImpactAudio') understandingYourImpactAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('beautyDivineAudio') beautyDivineAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('courageousHonestyAudio') courageousHonestyAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('innerTranslatorAudio') innerTranslatorAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('healthyBoundariesAudio') healthyBoundariesAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('selfInquiryBoundariesAudio') selfInquiryBoundariesAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('askingForHelpAudio') askingForHelpAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('takeActionHelpAudio') takeActionHelpAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('creativeExpressionAudio') creativeExpressionAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('receivingAudio') receivingAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('receivingSpotAudio') receivingSpotAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('bibaAudio') bibaAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('livingWithArthurAudio') livingWithArthurAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('beingKindAudio') beingKindAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('beingKindToYourselfAudio') beingKindToYourselfAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('beingAuthenticAudio') beingAuthenticAudioRef: ElementRef<HTMLAudioElement>;


  completedModule: boolean;
  showCompleteBtn: boolean;
  showIncompleteBtn = true;
  audioDuration0901: number;
  audioDuration0902: number;
  audioDuration0903: number;
  audioDuration0904: number;
  audioDuration0905: number;
  audioDuration0906: number;
  audioDuration0907: number;
  audioDuration0908: number;
  audioDuration0909: number;
  audioDuration0910: number;
  audioDuration0911: number;
  audioDuration0912: number;
  audioDuration0913: number;
  audioDuration0914: number;
  audioDuration0915: number;
  audioDuration0916: number;
  audioDuration0917: number;
  audioDuration0918: number;
  audioDuration0919: number;
  audioDuration0920: number;
  audioDuration0921: number;
  tl1 = null;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {this.animate08Title()}, 1.5*1000);
  }

  ngAfterViewInit() {
    this.introModule09AudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0901 = this.introModule09AudioRef.nativeElement.duration;
    };
    this.beingPresentAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0902 = this.beingPresentAudioRef.nativeElement.duration;
    };
    this.bsaoAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0903 = this.bsaoAudioRef.nativeElement.duration;
    };
    this.enjoymentAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0904 = this.enjoymentAudioRef.nativeElement.duration;
    };
    this.livingTheDharmaAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0905 = this.livingTheDharmaAudioRef.nativeElement.duration;
    };
    this.understandingYourImpactAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0906 = this.understandingYourImpactAudioRef.nativeElement.duration;
    };
    this.beautyDivineAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0907 = this.beautyDivineAudioRef.nativeElement.duration;
    };
    this.courageousHonestyAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0908 = this.courageousHonestyAudioRef.nativeElement.duration;
    };
    this.innerTranslatorAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0909 = this.innerTranslatorAudioRef.nativeElement.duration;
    };
    this.healthyBoundariesAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0910 = this.healthyBoundariesAudioRef.nativeElement.duration;
    };
    this.selfInquiryBoundariesAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0911 = this.selfInquiryBoundariesAudioRef.nativeElement.duration;
    };
    this.askingForHelpAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0912 = this.askingForHelpAudioRef.nativeElement.duration;
    };
    this.takeActionHelpAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0913 = this.takeActionHelpAudioRef.nativeElement.duration;
    };
    this.creativeExpressionAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0914 = this.creativeExpressionAudioRef.nativeElement.duration;
    };
    this.receivingAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0915 = this.receivingAudioRef.nativeElement.duration;
    };
    this.receivingSpotAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0916 = this.receivingSpotAudioRef.nativeElement.duration;
    };
    this.bibaAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0917 = this.bibaAudioRef.nativeElement.duration;
    };
    this.livingWithArthurAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0918 = this.livingWithArthurAudioRef.nativeElement.duration;
    };
    this.beingKindAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0919 = this.beingKindAudioRef.nativeElement.duration;
    };
    this.beingKindToYourselfAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0920 = this.beingKindToYourselfAudioRef.nativeElement.duration;
    };
    this.beingAuthenticAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0921 = this.beingAuthenticAudioRef.nativeElement.duration;
    };
  }

  animate08Title() {
    gsap.set(".effect", {autoAlpha:1}) //remove fouc
    this.tl1 = gsap.timeline()
      .to(".title", {scale:50, duration:2, ease:"power4.inOut"})
      .to(".blendImage, .bg", {scale:1, duration:2}, 0)
      .to(".dark", {opacity:0, duration:1}, ">-=100%")
    
      this.tl1.play()
      // .then(() => {
      //   tl.reverse();
      // })
  }

  async initializeYoutubePlayerPluginWeb() {
    const player1 = {playerId: 'youtube-player0901', playerSize: {width: 640, height: 360}, videoId: 'MZJN4e0nzls'};
    const result1 = await YoutubePlayerWeb.initialize(player1);
    const player2 = {playerId: 'youtube-player0902', playerSize: {width: 640, height: 360}, videoId: 'bK3BJD67OBA'};
    const result2 = await YoutubePlayerWeb.initialize(player2);
    const player3 = {playerId: 'youtube-player0903', playerSize: {width: 640, height: 360}, videoId: 'HNBCVM4KbUM'};
    const result3 = await YoutubePlayerWeb.initialize(player3);
    const player4 = {playerId: 'youtube-player0904', playerSize: {width: 640, height: 360}, videoId: 'ymPF0q7U5oM'};
    const result4 = await YoutubePlayerWeb.initialize(player4);
    const player5 = {playerId: 'youtube-player0905', playerSize: {width: 640, height: 360}, videoId: 'YkgkThdzX-8'};
    const result5 = await YoutubePlayerWeb.initialize(player5);
    const player6 = {playerId: 'youtube-player0906', playerSize: {width: 640, height: 360}, videoId: 'cef35Fk7YD8'};
    const result6 = await YoutubePlayerWeb.initialize(player6);
    const player7 = {playerId: 'youtube-player0907', playerSize: {width: 640, height: 360}, videoId: 't8AQOQzysjc'};
    const result7 = await YoutubePlayerWeb.initialize(player7);
    const player8 = {playerId: 'youtube-player0908', playerSize: {width: 640, height: 360}, videoId: 'QfpXSa3Au6I'};
    const result8 = await YoutubePlayerWeb.initialize(player8);
    const player9 = {playerId: 'youtube-player0909', playerSize: {width: 640, height: 360}, videoId: 'EHw170UPsyk'};
    const result9 = await YoutubePlayerWeb.initialize(player9);
    const player10 = {playerId: 'youtube-player0910', playerSize: {width: 640, height: 360}, videoId: 'KnXKqCmFBTw'};
    const result10 = await YoutubePlayerWeb.initialize(player10);
    const player11 = {playerId: 'youtube-player0911', playerSize: {width: 640, height: 360}, videoId: 'ynVTqHYg5A4'};
    const result11 = await YoutubePlayerWeb.initialize(player11);
    const player12 = {playerId: 'youtube-player0912', playerSize: {width: 640, height: 360}, videoId: 'IxcS4XGEBGk'};
    const result12 = await YoutubePlayerWeb.initialize(player12);
    const player13 = {playerId: 'youtube-player0913', playerSize: {width: 640, height: 360}, videoId: '7E70pNrQt0k'};
    const result13 = await YoutubePlayerWeb.initialize(player13);
    const player14 = {playerId: 'youtube-player0914', playerSize: {width: 640, height: 360}, videoId: 'hkUSjaGiGzk'};
    const result14 = await YoutubePlayerWeb.initialize(player14);
    const player15 = {playerId: 'youtube-player0915', playerSize: {width: 640, height: 360}, videoId: 'JCnexOFOxCo'};
    const result15 = await YoutubePlayerWeb.initialize(player15);
    const player16 = {playerId: 'youtube-player0916', playerSize: {width: 640, height: 360}, videoId: '-WpdsRPzKco'};
    const result16 = await YoutubePlayerWeb.initialize(player16);
    const player17 = {playerId: 'youtube-player0917', playerSize: {width: 640, height: 360}, videoId: '759qtG5acjU'};
    const result17 = await YoutubePlayerWeb.initialize(player17);
    const player18 = {playerId: 'youtube-player0918', playerSize: {width: 640, height: 360}, videoId: 'ezH-SnJfxgc'};
    const result18 = await YoutubePlayerWeb.initialize(player18);
    const player19 = {playerId: 'youtube-player0919', playerSize: {width: 640, height: 360}, videoId: '2Q_ZzBGPdqE'};
    const result19 = await YoutubePlayerWeb.initialize(player19);
    const player20 = {playerId: 'youtube-player0920', playerSize: {width: 640, height: 360}, videoId: '08epsWG7LkU'};
    const result20 = await YoutubePlayerWeb.initialize(player20);
    const player21 = {playerId: 'youtube-player0921', playerSize: {width: 640, height: 360}, videoId: 'rQ0KpYJ0gZo'};
    const result21 = await YoutubePlayerWeb.initialize(player21);
    const player22 = {playerId: 'youtube-player0922', playerSize: {width: 640, height: 360}, videoId: 'tTtjETjGDFY'};
    const result22 = await YoutubePlayerWeb.initialize(player22);
    const player23 = {playerId: 'youtube-player0923', playerSize: {width: 640, height: 360}, videoId: '86x-u-tz0MA'};
    const result23 = await YoutubePlayerWeb.initialize(player23);
    const player24 = {playerId: 'youtube-player0924', playerSize: {width: 640, height: 360}, videoId: 'hkUSjaGiGzk'};
    const result24 = await YoutubePlayerWeb.initialize(player24);
    const player25 = {playerId: 'youtube-player0925', playerSize: {width: 640, height: 360}, videoId: 'cpkEvBtyL7M'};
    const result25 = await YoutubePlayerWeb.initialize(player25);
    const player26 = {playerId: 'youtube-player0926', playerSize: {width: 640, height: 360}, videoId: 'lf9vRwf2254'};
    const result26 = await YoutubePlayerWeb.initialize(player26);
    const player27 = {playerId: 'youtube-player0927', playerSize: {width: 640, height: 360}, videoId: 'BiczcGMIQ7A'};
    const result27 = await YoutubePlayerWeb.initialize(player27);
    const player28 = {playerId: 'youtube-player0928', playerSize: {width: 640, height: 360}, videoId: 'VDlKOHEjb-s'};
    const result28 = await YoutubePlayerWeb.initialize(player28);
    const player29 = {playerId: 'youtube-player0929', playerSize: {width: 640, height: 360}, videoId: 'r5ywQKJPfHs'};
    const result29 = await YoutubePlayerWeb.initialize(player29);
    const player30 = {playerId: 'youtube-player0930', playerSize: {width: 640, height: 360}, videoId: 'fayaTARX77Q'};
    const result30 = await YoutubePlayerWeb.initialize(player30);
    const player31 = {playerId: 'youtube-player0931', playerSize: {width: 640, height: 360}, videoId: '1Evwgu369Jw'};
    const result31 = await YoutubePlayerWeb.initialize(player31);
    const player32 = {playerId: 'youtube-player0932', playerSize: {width: 640, height: 360}, videoId: 'JC3atTsEkq0'};
    const result32 = await YoutubePlayerWeb.initialize(player32);
    const player33 = {playerId: 'youtube-player0933', playerSize: {width: 640, height: 360}, videoId: 'MdD7nQ_H0Z0'};
    const result33 = await YoutubePlayerWeb.initialize(player33);
  }

  async destroyYoutubePlayerPluginWeb() {
    const result1 = await YoutubePlayerWeb.destroy('youtube-player0901');
    const result2 = await YoutubePlayerWeb.destroy('youtube-player0902');
    const result3 = await YoutubePlayerWeb.destroy('youtube-player0903');
    const result4 = await YoutubePlayerWeb.destroy('youtube-player0904');
    const result5 = await YoutubePlayerWeb.destroy('youtube-player0905');
    const result6 = await YoutubePlayerWeb.destroy('youtube-player0906');
    const result7 = await YoutubePlayerWeb.destroy('youtube-player0907');
    const result8 = await YoutubePlayerWeb.destroy('youtube-player0908');
    const result9 = await YoutubePlayerWeb.destroy('youtube-player0909');
    const result10 = await YoutubePlayerWeb.destroy('youtube-player0910');
    const result11 = await YoutubePlayerWeb.destroy('youtube-player0911');
    const result12 = await YoutubePlayerWeb.destroy('youtube-player0912');
    const result13 = await YoutubePlayerWeb.destroy('youtube-player0913');
    const result14 = await YoutubePlayerWeb.destroy('youtube-player0914');
    const result15 = await YoutubePlayerWeb.destroy('youtube-player0915');
    const result16 = await YoutubePlayerWeb.destroy('youtube-player0916');
    const result17 = await YoutubePlayerWeb.destroy('youtube-player0917');
    const result18 = await YoutubePlayerWeb.destroy('youtube-player0918');
    const result19 = await YoutubePlayerWeb.destroy('youtube-player0919');
    const result20 = await YoutubePlayerWeb.destroy('youtube-player0920');
    const result21 = await YoutubePlayerWeb.destroy('youtube-player0921');
    const result22 = await YoutubePlayerWeb.destroy('youtube-player0922');
    const result23 = await YoutubePlayerWeb.destroy('youtube-player0923');
    const result24 = await YoutubePlayerWeb.destroy('youtube-player0924');
    const result25 = await YoutubePlayerWeb.destroy('youtube-player0925');
    const result26 = await YoutubePlayerWeb.destroy('youtube-player0926');
    const result27 = await YoutubePlayerWeb.destroy('youtube-player0927');
    const result28 = await YoutubePlayerWeb.destroy('youtube-player0928');
    const result29 = await YoutubePlayerWeb.destroy('youtube-player0929');
    const result30 = await YoutubePlayerWeb.destroy('youtube-player0930');
    const result31 = await YoutubePlayerWeb.destroy('youtube-player0931');
    const result32 = await YoutubePlayerWeb.destroy('youtube-player0932');
    const result33 = await YoutubePlayerWeb.destroy('youtube-player0933');
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

  ionViewWillEnter() {
    this.initializeYoutubePlayerPluginWeb();
    gsap.set(".dark", {opacity:1});
    gsap.set(".title", {scale:1});
    if(this.tl1 != null) {
      this.tl1.restart();
    }
  }
}
