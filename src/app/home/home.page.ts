import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, group, transition, query, animate, keyframes } from '@angular/animations';

import { ModalController } from '@ionic/angular';

import { NewsletterModalComponent } from '../modals/newsletter-modal/newsletter-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
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
    trigger('bubbleState', [
      // state('false', style({
      //   opacity: '0',
      //   transform: 'scale(0.5) translateY(-1000%) translateX(-1000%)'
      // })),
      // state('true', style({
      //   opacity: '1',
      //   transform: 'scale(1) translateY(0%) translateX(0%)'
      // })),
      transition('* <=> *', [
        group([
          query('.bubble-am', [
            style({
              transform: 'translateX(-200px) translateY(200px)'
            }),
            animate('14s linear', style({transform: 'translateX(110vw'}))
          ]),
          query('.bubble-psy', [
            style({
              transform: 'translateX(0px) translateY(-150px)'
            }),
            animate('14s linear', style({transform: 'translateX(-180vw'}))
          ]),
          query('.bubble-ws', [
            style({
              transform: 'translateX(0px) translateY(0px)'
            }),
            animate('14s linear', style({transform: 'translateY(150vh'}))
          ])
        ])
      ])
    ])
  ]
})
export class HomePage {
  isDone = true;
  bubbleIsDone = true;

  constructor(private modalCtrl: ModalController,
              private router: Router) {}

  onAnimationEvent (event: AnimationEvent) {
    this.isDone = !this.isDone;
  }

  onBubbleEvent (event: AnimationEvent) {
    this.bubbleIsDone = !this.bubbleIsDone;
  }

  bubblePopAM() {
    this.router.navigate(['/about-me']);
  }

  bubblePopP() {
    this.router.navigate(['/psychotherapy']);
  }

  bubblePopWS() {
    this.router.navigate(['/workshops']);
  }


  articleNine() {
    window.open('https://thriveglobal.com/stories/the-invitation-to-practice-awareness-of-our-oneness/', '_blank');
  }

  articleEight() {
    window.open('http://healingheartcommunications.blogspot.com/2019/04/forty-sixth-invitation.html', '_blank');
  }

  articleSeven() {
    window.open('https://thriveglobal.com/stories/energy-hygiene-practice-for-maintaining-your-vibrance/', '_blank');
  }

  articleSix() {
    window.open('http://healingheartcommunications.blogspot.com/2019/03/forty-fifth-invitation_11.html', '_blank');
  }

  articleFive() {
    window.open('http://healingheartcommunications.blogspot.com/2018/09/forty-fourth-invitation.html', '_blank');
  }

  articleFour() {
    window.open('http://healingheartcommunications.blogspot.com/2018/08/forty-third-invitation.html', '_blank');
  }

  articleThree() {
    window.open('https://www.zoosk.com/date-mix/online-dating-advice/online-dating-fatigue/', '_blank');
  }

  articleTwo() {
    window.open('https://www.professorshouse.com/inner-steps-to-take-before-approaching-effective-conflict/', '_blank');
  }

  articleOne() {
    window.open('https://www.wellness.com/blog/13288760/what-to-keep-in-mind-and-close-to-your-heart-as-you-grieve/deva-joy-gouss', '_blank');
  }

  async presentNewsletterModal() {
    const modal = await this.modalCtrl.create({
      component: NewsletterModalComponent,
      componentProps: {}
    });
    return await modal.present();
  }
}
