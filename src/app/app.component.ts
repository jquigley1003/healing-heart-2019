import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
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
}
