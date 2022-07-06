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
  @ViewChild('panelContainer') panelContainer: ElementRef<HTMLDivElement>;
  @ViewChild('primaryPanel') primaryPanel: ElementRef<HTMLDivElement>;
  @ViewChild('titlePrimary') titlePrimary: ElementRef<HTMLDivElement>;
  @ViewChild('infoPrimary') infoPrimary: ElementRef<HTMLDivElement>;
  @ViewChild('secondaryPanel') secondaryPanel: ElementRef<HTMLDivElement>;
  @ViewChild('tertiaryPanel') tertiaryPanel: ElementRef<HTMLDivElement>;

  @ViewChild('panelContainer2') panelContainer2: ElementRef<HTMLDivElement>;
  @ViewChild('panelContainer3') panelContainer3: ElementRef<HTMLDivElement>;
  @ViewChild('primaryPanel2') primaryPanel2: ElementRef<HTMLDivElement>;
  @ViewChild('secondaryPanel2') secondaryPanel2: ElementRef<HTMLDivElement>;
  @ViewChild('tertiaryPanel2') tertiaryPanel2: ElementRef<HTMLDivElement>;
  @ViewChild('introMYJVimeo') introMYJVimeoRef: ElementRef;

  scrollElement: any;
  scrollDetail: any;
  tlOne = gsap.timeline();
  tlTwo = gsap.timeline();
  tlThree = gsap.timeline();
  introMYJVimeoPlayer: Player;

  constructor() { }

  ngOnInit() {
    
  }

  async ngAfterViewInit() {
    gsap.registerPlugin (ScrollTrigger);
    this.scrollElement = await this.ionContent.getScrollElement();
    console.log("scrollElement = ", this.scrollElement);

    this.tlOne
    .from(this.primaryPanel.nativeElement, {
      scale: 0.0, xPercent: 100
    })
    // .from(this.secondaryPanel.nativeElement, {xPercent: -100})
    // .from(this.tertiaryPanel.nativeElement, {yPercent: -100});
    this.tlTwo
    .from(this.secondaryPanel.nativeElement, {
      scale: 0.0, xPercent: -100});

    // this.tlTwo
    // .from(this.primaryPanel2.nativeElement, {xPercent: 105})
    // .from(this.secondaryPanel2.nativeElement, {xPercent: -105})
    // .from(this.tertiaryPanel2.nativeElement, {yPercent: -105});

    this.tlThree
    .from(this.primaryPanel2.nativeElement, {scale: 0.0})
    .from(this.secondaryPanel2.nativeElement, {scale: 0.0})
    .from(this.tertiaryPanel2.nativeElement, {scale: 0.0});

    ScrollTrigger.create({
      animation: this.tlOne,
      trigger: this.panelContainer.nativeElement,
      scroller: this.scrollElement,
      preventOverlaps: true,
      start: 'top 70%',
      end: 'bottom bottom',
      scrub: 0.5,
      markers: true
    });

    ScrollTrigger.create({
      animation: this.tlTwo,
      trigger: this.panelContainer2.nativeElement,
      scroller: this.scrollElement,
      start: 'top 60%',
      end: 'bottom bottom',
      scrub: 0.5,
      // pin: true,
      // anticipatePin: 1,
      markers: {
        startColor: '#6434eb',
        endColor: '#eba434'
      }
    })

    ScrollTrigger.create({
      animation: this.tlThree,
      trigger: this.panelContainer3.nativeElement,
      scroller: this.scrollElement,
      start: 'top top',
      end: '+=4000',
      scrub: true,
      pin: true,
      anticipatePin: 1,
      markers: {
        startColor: 'black',
        endColor: 'pink'
      }
    })

    this.initializeVimeoPlayers();
  }

  async initializeVimeoPlayers() {
    this.introMYJVimeoPlayer = new Player(this.introMYJVimeoRef.nativeElement, {
      id: 725062094,
      height: 350
    });
  }

  async onScroll(ev) {
    // console.log("this is scrolling!", ev);
    this.scrollDetail = ev.detail;
  }

}
