import { Component, OnInit } from '@angular/core';
import { AnimationEvent, animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ketamine',
  templateUrl: './ketamine.page.html',
  styleUrls: ['./ketamine.page.scss'],
  animations: [
    trigger('birdState', [
      state('flyAway', style({
        opacity: '0',
        transform: 'scale(0.5) translateY(-1000%) translateX(-1000%)'
      })),
      state('flyBack', style({
        opacity: '1',
        transform: 'scale(1) translateY(0%) translateX(0%)'
      })),
      transition('* => flyAway', animate('2s linear')),
      transition('* => flyBack', animate('200ms linear')),
      transition('void => *', [
        style({transform: 'translateX(300%)'}),
        animate('300ms ease-in-out')
      ])
    ])
  ]
})
export class KetaminePage implements OnInit {
  isDone = true;
  birdPresent = false;
  flyAwayState: string = '';

  constructor( private router: Router ) {}

  ngOnInit() {
    setTimeout(() => {
      this.birdPresent = true
    },2000);
  }

  onAnimationEvent (event: AnimationEvent ) {
    this.isDone = !this.isDone;
  }

  flyAway() {
    this.flyAwayState = 'flyAway';
    setTimeout(() => {
      this.router.navigate(['/psychotherapy']);
      this.flyAwayState = 'flyBack';
    },2000);
  }
}
