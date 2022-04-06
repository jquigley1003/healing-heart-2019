import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Player from '@vimeo/player';

@Component({
  selector: 'app-module02',
  templateUrl: './module02.page.html',
  styleUrls: ['./module02.page.scss'],
})
export class Module02Page implements OnInit, AfterViewInit {
  @ViewChild('welcomeMasculineAudio') welcomeMasculineAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('maleMudraFlowVimeo') maleMudraFlowVimeoRef: ElementRef;

  completedModule: boolean;
  showCompleteBtn: boolean;
  showIncompleteBtn = true;
  audioDuration0201: number;
  maleMudraFlowVimeoPlayer: Player;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.welcomeMasculineAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0201 = this.welcomeMasculineAudioRef.nativeElement.duration;
    };
    this.maleMudraFlowVimeoPlayer = new Player(this.maleMudraFlowVimeoRef.nativeElement, {
      id: 694122746,
      height: 350
    });
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
}
