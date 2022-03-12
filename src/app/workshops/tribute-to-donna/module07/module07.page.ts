import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { YoutubePlayerWeb } from 'capacitor-youtube-player'; // Web version

import { UserService } from 'src/app/shared/user/user.service';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-module07',
  templateUrl: './module07.page.html',
  styleUrls: ['./module07.page.scss'],
})
export class Module07Page implements OnInit, AfterViewInit {
  @ViewChild('introHaveItAllAudio') introHaveItAllAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('guidedImageryAudio') guidedImageryAudioRef: ElementRef<HTMLAudioElement>;

  currentUser: User;
  userFullName: string;
  userEmail: string;
  completedModule07: boolean;
  showCompleteBtn: boolean;
  showIncompleteBtn = true;
  assignment0701: boolean;
  assingment0702: boolean;
  assingment0703: boolean;
  
  audioDuration0701: number;
  audioDuration0702: number;
  
  constructor(
    private userService: UserService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.initializeUserData();
  }

  async ngAfterViewInit() {
    this.initializeYoutubePlayerPluginWeb();
    this.introHaveItAllAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0701 = this.introHaveItAllAudioRef.nativeElement.duration;
    };
    this.guidedImageryAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0702 = this.guidedImageryAudioRef.nativeElement.duration;
    };
  }

  initializeUserData() {
    this.authService.returnUserData()
    .then((data) => {
      if(data) {
        this.currentUser = data;
        this.userFullName = data.firstName + ' ' + data.lastName;
        this.userEmail = data.email;
        this.completedModule07 = data.completed.work02module07;
        if(this.completedModule07) {
          this.showCompleteBtn = true;
          this.showIncompleteBtn = false;
        } else {
          this.showCompleteBtn = false;
          this.showIncompleteBtn = true;
        }
      } else {
        this.currentUser = null;
        this.userFullName = null;
        this.userEmail = null;
        this.completedModule07 = false;
      }
    })
  }

  async initializeYoutubePlayerPluginWeb() {
    const options1 = {playerId: 'youtube-player0701', playerSize: {}, videoId: 'IYzlVDlE72w'};
    const result1 = await YoutubePlayerWeb.initialize(options1);
  }

  async destroyYoutubePlayerPluginWeb() {
    const result1 = await YoutubePlayerWeb.destroy('youtube-player0701');
  }

  markComplete() {
    const moduleCompleted = {
      completed: {
        work02module07: true,
      }
    };
    this.showCompleteBtn = true;
    this.showIncompleteBtn = false;
    this.userService.addModuleComplete('Module 07', moduleCompleted, this.currentUser);
  }

  markIncomplete() {
    const moduleCompleted = {
      completed: {
        work02module07: false,
      }
    };
    this.showCompleteBtn = false;
    this.showIncompleteBtn = true;
    this.userService.removeModuleComplete('Module 07', moduleCompleted, this.currentUser);
  }

  ionViewWillLeave() {
    this.destroyYoutubePlayerPluginWeb();
  }

  ionViewDidEnter() {
    this.initializeYoutubePlayerPluginWeb();
  }
}
