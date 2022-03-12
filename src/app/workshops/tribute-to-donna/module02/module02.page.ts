import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { YoutubePlayerWeb } from 'capacitor-youtube-player'; // Web version

import { UserService } from 'src/app/shared/user/user.service';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-module02',
  templateUrl: './module02.page.html',
  styleUrls: ['./module02.page.scss'],
})
export class Module02Page implements OnInit, AfterViewInit {
  @ViewChild('lovingYourselfAudio') lovingYourselfAudioRef: ElementRef<HTMLAudioElement>;

  currentUser: User;
  userFullName: string;
  userEmail: string;
  completedModule02: boolean;
  showCompleteBtn: boolean;
  showIncompleteBtn = true;
  assignment0201: boolean;
  assingment0202: boolean;
  assingment0203: boolean;
  assingment0204: boolean;
  assingment0205: boolean;
  assingment0206: boolean;
  assingment0207: boolean;
  assingment0208: boolean;
  audioDuration0201: number;

  constructor(
    private userService: UserService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.initializeUserData();
  }

  async ngAfterViewInit() {
    this.initializeYoutubePlayerPluginWeb();
    this.lovingYourselfAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0201 = this.lovingYourselfAudioRef.nativeElement.duration;
    };
  }

  initializeUserData() {
    this.authService.returnUserData()
    .then((data) => {
      if(data) {
        this.currentUser = data;
        this.userFullName = data.firstName + ' ' + data.lastName;
        this.userEmail = data.email;
        this.completedModule02 = data.completed.work02module02;
        if(this.completedModule02) {
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
        this.completedModule02 = false;
      }
    })
  }

  async initializeYoutubePlayerPluginWeb() {
    const options1 = {playerId: 'youtube-player0201', playerSize: {}, videoId: 'XLFEvHWD_NE'};
    const result1 = await YoutubePlayerWeb.initialize(options1);
  }

  async destroyYoutubePlayerPluginWeb() {
    const result1 = await YoutubePlayerWeb.destroy('youtube-player0201');
  }

  markComplete() {
    const moduleCompleted = {
      completed: {
        work02module02: true,
      }
    };
    this.showCompleteBtn = true;
    this.showIncompleteBtn = false;
    this.userService.addModuleComplete('Module 02', moduleCompleted, this.currentUser);
  }

  markIncomplete() {
    const moduleCompleted = {
      completed: {
        work02module02: false,
      }
    };
    this.showCompleteBtn = false;
    this.showIncompleteBtn = true;
    this.userService.removeModuleComplete('Module 02', moduleCompleted, this.currentUser);
  }

  ionViewWillLeave() {
    this.destroyYoutubePlayerPluginWeb();
  }

  ionViewDidEnter() {
    this.initializeYoutubePlayerPluginWeb();
  }
}
