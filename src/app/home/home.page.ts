import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, group, transition, query, animate, keyframes } from '@angular/animations';
import { HttpClient } from '@angular/common/http';

import { growImgTrigger, slideTitleRightTrigger } from '../shared/components/animations/animations.component';

import { ModalController } from '@ionic/angular';

import { NewsletterModalComponent } from '../modals/newsletter-modal/newsletter-modal.component';
import { MailchimpService } from '../shared/services/mailchimp.service';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

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
      transition('true <=> false', [
        group([
          query('.bubble-psy', [
            style({
              transform: 'scale(1)'
            }),
            animate('40s 3000ms linear', style({transform: 'scale(1.5) translateX(-200vw) translateY(-250vh)'}))
          ]),
          query('.bubble-am', [
            style({
              transform: 'scale(0.8)'
            }),
            animate('20s 3000ms linear', style({transform: 'translateX(200vw) translateY(30vh)'}))
          ]),
          query('.bubble-ws', [
            style({
              transform: 'scale(0.5)'
            }),
            animate('30s 3000ms linear', style({transform: 'scale(1.3) translateX(70vw) translateY(200vh)'}))
          ]),
          query('.bubble-book-vid', [
            style({
              transform: 'scale(1.0)'
            }),
            animate('40s 6000ms ease-in', style({transform: 'scale(1.5) translateX(200vw) translateY(-150vh)'}))
          ])
        ])
      ])
    ]),
    slideTitleRightTrigger,
    growImgTrigger
  ]
})
export class HomePage implements OnInit {
  isDone = true;
  bubbleIsDone = false;
  campaigns$: Observable<any>;
  allCampaigns = [];
  showNewsletters = false;
  blogs$: Observable<any>;
  bloggerBlogs = [];
  objectKeys = Object.keys;

  constructor(private modalCtrl: ModalController,
              private router: Router,
              private mailchimpService: MailchimpService,
              private http: HttpClient) {}

  ngOnInit() {
    this.getCampaigns()
  }


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

  bubblePopBV() {
    this.router.navigate(['/publications-videos']);
  }

  articleFourteen() {
    window.open('http://healingheartcommunications.blogspot.com/2021/09/fifty-sixth-invitation.html', '_blank');
  }

  articleThirteen() {
    window.open('https://thriveglobal.com/stories/2020-vision/', '_blank');
  }

  articleTwelve() {
    window.open('https://podcasts.apple.com/us/podcast/being-friends-with-your-illness-with-deva-joy/id1456306837?i=1000460510318', '_blank');
  }

  articleEleven() {
    window.open('https://thriveglobal.com/stories/love-your-life-as-it-is/?utm_source=Newsletter_Publish&utm_medium=Thrive', '_blank');
  }

  articleTen() {
    window.open('https://thriveglobal.com/stories/channel-your-goodness-as-a-spiritual-practice/', '_blank');
  }

  articleNine() {
    window.open('https://thriveglobal.com/stories/the-invitation-to-practice-awareness-of-our-oneness/', '_blank');
  }

  articleSeven() {
    window.open('https://thriveglobal.com/stories/energy-hygiene-practice-for-maintaining-your-vibrance/', '_blank');
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

  getCampaigns() {
    this.mailchimpService.getMailChimpNewsLetters()
      .pipe(take(1))
        .subscribe(res => {
          this.allCampaigns = res.campaigns;
          this.allCampaigns.sort((a, b) => (a.send_time > b.send_time) ? -1 : 1)
          console.log('home page results: ', this.allCampaigns);
        });
  }

  // getBloggerBlogs() {
  //   const blogApiKey = environment.blogger.apiKey;
  //   this.blogs$ = this.http.get('https://www.googleapis.com/blogger/v3/users/11063089649650567098/blogs?key='+blogApiKey);
  //   this.blogs$
  //   .pipe(take(1))
  //       .subscribe(res => {
  //         this.bloggerBlogs = res;
  //         console.log('Blogger results: ', this.bloggerBlogs);
  //       });
  // }

  toggleNewsletters() {
    this.showNewsletters = !this.showNewsletters;
  }
}
