import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tribute-to-donna',
  templateUrl: './tribute-to-donna.page.html',
  styleUrls: ['./tribute-to-donna.page.scss'],
})
export class TributeToDonnaPage implements OnInit, AfterViewInit {
  @ViewChild('whatCanIGiveAudio') whatCanIGiveAudioRef: ElementRef<HTMLAudioElement>;

  completedModule: boolean;
  showCompleteBtn: boolean;
  showIncompleteBtn = true;
  audioDuration01: number;
 

  constructor() { }

  ngOnInit() {
  }

  async ngAfterViewInit() {
    this.whatCanIGiveAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration01 = this.whatCanIGiveAudioRef.nativeElement.duration;
    };
  }
}
