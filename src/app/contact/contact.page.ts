import { Component, OnInit } from '@angular/core';
import { AnimationEvent, animate, keyframes, state, style, transition, trigger } from '@angular/animations';

import { ModalController } from '@ionic/angular';

import { NewsletterModalComponent } from '../modals/newsletter-modal/newsletter-modal.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
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
      transition('* => flyAway', animate('2s linear')),
      transition('* => flyBack', animate('300ms linear')),
      transition('void => *', [
        style({transform: 'translateX(-300%)'}),
        animate('300ms ease-in-out')
      ])
    ])
  ]
})
export class ContactPage implements OnInit {

  isDone = true;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  onAnimationEvent (event: AnimationEvent ) {
    this.isDone = !this.isDone;
  }

  getClientForm() {
    window.open('https://s3.amazonaws.com/healingheart-assets/form-client-info.doc');
  }

  getInformedForm(){
    window.open('https://s3.amazonaws.com/healingheart-assets/form-informed-consent.doc');
  }

  getLifeForm() {
    window.open('https://s3.amazonaws.com/healingheart-assets/form-life-script.doc');
  }

  async presentNewsletterModal() {
    const modal = await this.modalCtrl.create({
      component: NewsletterModalComponent,
      componentProps: {}
    });
    return await modal.present();
  }
}
