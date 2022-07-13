import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

import Player from '@vimeo/player';
import { gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-marrying-yourself-intro',
  templateUrl: './marrying-yourself-intro.page.html',
  styleUrls: ['./marrying-yourself-intro.page.scss'],
})
export class MarryingYourselfIntroPage implements OnInit, AfterViewInit {
  @ViewChild(IonContent) ionContent: IonContent;
  @ViewChild('scrollContainer') scrollContainer: ElementRef;
  @ViewChild('panelContainerOne') panelContainerOne: ElementRef<HTMLDivElement>;
  @ViewChild('primaryPanelOne') primaryPanelOne: ElementRef<HTMLDivElement>;
  @ViewChild('secondaryPanelOne') secondaryPanelOne: ElementRef<HTMLDivElement>;
  @ViewChild('tertiaryPanelOne') tertiaryPanelOne: ElementRef<HTMLDivElement>;
  @ViewChild('image1') image1: ElementRef<HTMLElement>;
  @ViewChild('image2') image2: ElementRef<HTMLElement>;
  @ViewChild('image3') image3: ElementRef<HTMLElement>;
  @ViewChild('image4') image4: ElementRef<HTMLElement>;

  @ViewChild('panelContainerTwo') panelContainerTwo: ElementRef<HTMLDivElement>;
  @ViewChild('primaryPanelTwo') primaryPanelTwo: ElementRef<HTMLDivElement>;

  @ViewChild('panelContainerThree') panelContainerThree: ElementRef<HTMLDivElement>;
  @ViewChild('secondaryPanelThree') secondaryPanelThree: ElementRef<HTMLDivElement>;

  @ViewChild('introMYJVimeo') introMYJVimeoRef: ElementRef;
  @ViewChild('lindseyMYJVimeo') lindseyMYJVimeoRef: ElementRef;
  @ViewChild('kristenMYJVimeo') kristenMYJVimeoRef: ElementRef;
  @ViewChild('antionetteMYJVimeo') antionetteMYJVimeoRef: ElementRef;

  scrollElement: any;
  scrollDetail: any;
  tlOne1 = gsap.timeline();
  tlTwo2 = gsap.timeline();
  tlThree3 = gsap.timeline();
  introMYJVimeoPlayer: Player;
  lindseyMYJVimeoPlayer: Player;
  kristenMYJVimeoPlayer: Player;
  antionetteMYJVimeoPlayer: Player;

  constructor() { }

  ngOnInit() {
    
  }

  async ngAfterViewInit() {
    gsap.registerPlugin (ScrollTrigger);
    this.scrollElement = await this.ionContent.getScrollElement();

    this.tlOne1
    .from(this.primaryPanelOne.nativeElement, {scale: 0.0})
    .from(this.image1.nativeElement, {scale: 0.0})
    .from(this.secondaryPanelOne.nativeElement, {scale: 0.0})
    .from(this.image2.nativeElement, {scale: 0.0})
    .from(this.image3.nativeElement, {scale: 0.0})
    .from(this.image4.nativeElement, {scale: 0.0})
    .from(this.tertiaryPanelOne.nativeElement, {scale: 0.0});

    this.tlTwo2
    .from(this.primaryPanelTwo.nativeElement, {
      scale: 0.0
    });

    this.tlThree3
    .from(this.secondaryPanelThree.nativeElement, {
      scale: 0.0
    });

    // this.tlTwo
    // .from(this.primaryPanel2.nativeElement, {xPercent: 105})
    // .from(this.secondaryPanel2.nativeElement, {xPercent: -105})
    // .from(this.tertiaryPanel2.nativeElement, {yPercent: -105});

    ScrollTrigger.create({
      animation: this.tlOne1,
      trigger: this.panelContainerOne.nativeElement,
      scroller: this.scrollElement,
      start: 'top top',
      end: '+=500%',
      scrub: true,
      pin: true,
      anticipatePin: 1
      // markers: {
      //   startColor: 'black',
      //   endColor: 'pink'
      // }
    });

    ScrollTrigger.create({
      animation: this.tlTwo2,
      trigger: this.panelContainerTwo.nativeElement,
      scroller: this.scrollElement,
      start: 'top 80%',
      end: 'bottom bottom',
      scrub: 0.5
      // markers: {
      //   startColor: 'black',
      //   endColor: 'pink'
      // }
    });

    ScrollTrigger.create({
      animation: this.tlThree3,
      trigger: this.panelContainerThree.nativeElement,
      scroller: this.scrollElement,
      start: 'top 60%',
      end: 'bottom bottom',
      scrub: 0.5
    });

    this.initializeVimeoPlayers();
  }

  async initializeVimeoPlayers() {
    this.introMYJVimeoPlayer = new Player(this.introMYJVimeoRef.nativeElement, {
      id: 725062094,
      height: 350
    });
    this.lindseyMYJVimeoPlayer = new Player(this.lindseyMYJVimeoRef.nativeElement, {
      id: 716847928,
      height: 350
    });
    this.kristenMYJVimeoPlayer = new Player(this.kristenMYJVimeoRef.nativeElement, {
      id: 716847544,
      height: 350
    });
    this.antionetteMYJVimeoPlayer = new Player(this.antionetteMYJVimeoRef.nativeElement, {
      id: 727900516,
      height: 350
    });
  }

  async onScroll(ev) {
    // console.log("this is scrolling!", ev);
    this.scrollDetail = ev.detail;
  }

}
