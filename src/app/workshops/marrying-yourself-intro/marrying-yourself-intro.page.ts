import { registerLocaleData } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { gsap } from 'gsap';
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
  @ViewChild('secondaryPanel') secondaryPanel: ElementRef<HTMLDivElement>;
  @ViewChild('tertiaryPanel') tertiaryPanel: ElementRef<HTMLDivElement>;

  tl = gsap.timeline();

  constructor() { }

  ngOnInit() {}

  ngAfterViewInit() {
    gsap.registerPlugin (ScrollTrigger);
    this.tl
    .from(this.primaryPanel.nativeElement, {xPercent: 100})
    .from(this.secondaryPanel.nativeElement, {xPercent: -100})
    .from(this.tertiaryPanel.nativeElement, {yPercent: -200});

    ScrollTrigger.create({
      animation: this.tl,
      trigger: this.panelContainer.nativeElement,
      scroller: this.scrollContainer.nativeElement,
      start: 'top 10%',
      end: '+=5000',
      scrub: true,
      pin: true,
      anticipatePin: 1,
      markers: true
    }) 
  }

}
