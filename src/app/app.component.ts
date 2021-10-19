import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
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
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
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
}
