import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';

import { ModalController } from '@ionic/angular';

import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { RegisterModalComponent } from './shared/auth/register-modal/register-modal.component';
import { SignInModalComponent } from './shared/auth/sign-in-modal/sign-in-modal.component';
import { User } from './shared/models/user.model';
import { AuthService } from './shared/auth/auth.service';
import { ToastService } from './shared/notify/toast.service';
import { AlertService } from './shared/notify/alert.service';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  currentUser = null;
  userFullName = null;
  currentUser$: Observable<User>;
  ngUnsubscribe = new Subject<void>();
  isAdmin = false;
  isWorkshop01 = false;
  isWorkshop02 = false;
  showMainMenu = true;
  showWorkshop1 = false;
  showWorkshop2 = false;

  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'About Me',
      url: '/about-me',
      icon: 'body'
    },
    {
      title: 'Psychotherapy',
      url: '/psychotherapy',
      icon: 'eye'
    },
    {
      title: 'Workshops',
      url: '/workshops',
      icon: 'construct'
    },
    {
      title: 'Publications & Videos',
      url: '/publications-videos',
      icon: 'journal'
    },
    {
      title: 'Blog',
      url: '/blog',
      icon: 'laptop'
    },
    {
      title: 'Contact',
      url: '/contact',
      icon: 'person-circle'
    }
  ];

  constructor(
    private modalCtrl: ModalController,
    private authService: AuthService,
    private toastService: ToastService,
    private alertService: AlertService,
    private router: Router,
    private swUpdate: SwUpdate
  ) {
    this.initializeUsers();
    // this.initializeApp();
  }

  ngOnInit() {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(data => {
        // console.log(data.current.appData);
        this.alertService.presentAlert(
          'App Update!',
          'Updated version of Healing Heart Communications app is available.',
          'Load Improved Version?',
          [
            {
              text: 'Cancel',
              role: 'cancel',
              cssClass: 'secondary',
            },
            {
              text: 'Yes',
              handler: () => {
                window.location.reload();
              }
            }
          ]
        );
          // if (confirm('Updated version of SFCA app available. Load New Version?')) {
          //     window.location.reload();
          // }
      });
    }
  }

  initializeUsers() {
    this.getCurrentUser();
    this.authService.currentUser$
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(data => {
        this.currentUser = data;
        // console.log('app component current user: ',this.currentUser);
      });
    this.authService.isAdmin$
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(async data => {
        this.isAdmin = data;
        // console.log('app component admin idTokenResult is: ', this.isAdmin);
      });
  }

  toggleMenu(menu) {
    switch (menu) {
      case 'mainMenu':
        this.showMainMenu = true;
        this.showWorkshop1 = false;
        this.showWorkshop2 = false;
          break;
      case 'workshop1':
        this.showMainMenu = false;
        this.showWorkshop1 = true;
        this.showWorkshop2 = false;
          break;
      case 'workshop2':
        this.showMainMenu = false;
        this.showWorkshop1 = false;
        this.showWorkshop2 = true;
        break;
    }
  }

  getCurrentUser() {
    this.currentUser$ = this.authService.user$;
    this.currentUser$
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(data => {
      if(data) {
        this.userFullName = data.firstName + ' ' + data.lastName;
        this.isWorkshop01 = data.roles.workshop01;
        this.isWorkshop02 = data.roles.workshop01; // change this line to data.roles.workshop02!
      } else {
        this.userFullName = null;
        this.isWorkshop01 = false;
        this.isWorkshop02 = false;
      }
      // console.log('app component getCurrentUser = ', this.userFullName);
    });
  }

  async presentRegisterModal() {
    const modal = await this.modalCtrl.create({
      component: RegisterModalComponent,
      componentProps: {}
    });
    return await modal.present();
  }

  async presentSignInModal() {
    const modal = await this.modalCtrl.create({
      component: SignInModalComponent,
      componentProps: {}
    });
    return await modal.present();
  }

  async signOut() {
    await this.authService.signOut()
    .then(async () => {
      await this.toastService.presentToast(
        'You Have Signed Out.',
        'middle',
        [{
          text: 'OK',
          role: 'cancel',
          handler: () => {
            this.router.navigate(['/home']);
          }
        }],
        3000
      );
      this.router.navigate(['/home']);
      this.showMainMenu = true;
      this.showWorkshop1 = false;
      this.showWorkshop2 = false;
    });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
