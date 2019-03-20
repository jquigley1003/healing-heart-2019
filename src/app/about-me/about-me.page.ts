import { Component, OnInit } from '@angular/core';
import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.page.html',
  styleUrls: ['./about-me.page.scss'],
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
    ])
  ]
})
export class AboutMePage {

  isDone = true;

  onAnimationEvent (event: AnimationEvent ) {
    this.isDone = !this.isDone;
  }
}
