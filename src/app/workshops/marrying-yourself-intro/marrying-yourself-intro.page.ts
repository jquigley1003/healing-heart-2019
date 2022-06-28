import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import Player from '@vimeo/player';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-marrying-yourself-intro',
  templateUrl: './marrying-yourself-intro.page.html',
  styleUrls: ['./marrying-yourself-intro.page.scss'],
})
export class MarryingYourselfIntroPage implements OnInit, AfterViewInit {
  @ViewChild('scrollContainer') scrollContainer: ElementRef;
  @ViewChild('panelContainer') panelContainer: ElementRef<HTMLDivElement>;
  @ViewChild('primaryPanel') primaryPanel: ElementRef<HTMLDivElement>;
  @ViewChild('secondaryPanel') secondaryPanel: ElementRef<HTMLDivElement>;
  @ViewChild('tertiaryPanel') tertiaryPanel: ElementRef<HTMLDivElement>;

  @ViewChild('panelContainer2') panelContainer2: ElementRef<HTMLDivElement>;
  @ViewChild('primaryPanel2') primaryPanel2: ElementRef<HTMLDivElement>;
  @ViewChild('secondaryPanel2') secondaryPanel2: ElementRef<HTMLDivElement>;
  @ViewChild('tertiaryPanel2') tertiaryPanel2: ElementRef<HTMLDivElement>;
  @ViewChild('introMYJVimeo') introMYJVimeoRef: ElementRef;

  tlOne = gsap.timeline();
  tlTwo = gsap.timeline();
  introMYJVimeoPlayer: Player;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    gsap.registerPlugin (ScrollTrigger);
    this.tlOne
    .from(this.primaryPanel.nativeElement, {xPercent: 105})
    .from(this.secondaryPanel.nativeElement, {xPercent: -105})
    .from(this.tertiaryPanel.nativeElement, {yPercent: -105});

    this.tlTwo
    .from(this.primaryPanel2.nativeElement, {xPercent: 105})
    .from(this.secondaryPanel2.nativeElement, {xPercent: -105})
    .from(this.tertiaryPanel2.nativeElement, {yPercent: -105});

    ScrollTrigger.create({
      animation: this.tlOne,
      trigger: this.panelContainer.nativeElement,
      scroller: this.scrollContainer.nativeElement,
      
      start: 'top top+=10px',
      end: '+=4000',
      scrub: 0.5,
      pin: true,
      anticipatePin: 1,
      // markers: true
    });

    ScrollTrigger.create({
      animation: this.tlTwo,
      trigger: this.panelContainer2.nativeElement,
      scroller: this.scrollContainer.nativeElement,
      start: 'top top+=10px',
      end: '+=4000',
      scrub: 0.5,
      pin: true,
      // markers: true
    }) 

    this.initializeVimeoPlayers();
  }

  async initializeVimeoPlayers() {
    this.introMYJVimeoPlayer = new Player(this.introMYJVimeoRef.nativeElement, {
      id: 725062094,
      height: 350
    });
  }

}
