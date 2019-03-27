import { Component, OnInit } from '@angular/core';
import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-psychotherapy',
  templateUrl: './psychotherapy.page.html',
  styleUrls: ['./psychotherapy.page.scss'],
  animations: [
    trigger('colorChange', [
      state('true', style({
        opacity: 1
      })),
      state('false', style({
        opacity: 1
      })),
      transition('true <=> false', [
        animate('20s linear', keyframes([
          style({ backgroundColor: '#ce76e4', offset: 0}),/* purple */
          style({ backgroundColor: '#4fe0ed', offset: 0.1}),/* blue-aqua */
          style({ backgroundColor: '#42e317', offset: 0.3}),/* lime-green */
          style({ backgroundColor: '#9e48b3', offset: 0.5}),/* dk-purple */
          style({ backgroundColor: '#e890ee', offset: 0.7}),/* pink */
          style({ backgroundColor: '#68bad8', offset: 0.9}),/* lt-blue */
          style({ backgroundColor: '#ce76e4', offset: 1.0})/* purple */
        ]))
      ])
    ]),
    trigger('birdState', [
      state('flyAway', style({
        opacity: '0',
        transform: 'scale(0.5) translateY(-1000%) translateX(1000%)'
      })),
      state('flyBack', style({
        opacity: '1',
        transform: 'scale(1) translateY(0%) translateX(0%)'
      })),
      transition('* => flyAway', animate('3s linear')),
      transition('* => flyBack', animate('400ms linear')),
      transition('void => *', [
        style({transform: 'translateX(-300%)'}),
        animate('300ms ease-in-out')
      ])
    ])
  ]
})
export class PsychotherapyPage implements OnInit {

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

  // flyAway() {
  //   this.flyAwayState = 'flyAway';
  //   setTimeout(() => {
  //     this.router.navigate(['/psychotherapy/more']);
  //     this.flyAwayState = 'flyBack';
  //   },2000);
  // }

  async flyAway() {
    this.flyAwayState = 'flyAway';
    let finalresult = await setTimeout(() => {
      this.router.navigate(['/psychotherapy/more']);
      this.flyAwayState = 'flyBack';
    },2000);
    return finalresult;
  }
}
