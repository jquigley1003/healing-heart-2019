import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { YoutubePlayerWeb } from 'capacitor-youtube-player'; // Web version

import { UserService } from 'src/app/shared/user/user.service';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-module05',
  templateUrl: './module05.page.html',
  styleUrls: ['./module05.page.scss'],
})
export class Module05Page implements OnInit, AfterViewInit {
  @ViewChild('scripting5StepsAudio') scripting5StepsAudioRef: ElementRef<HTMLAudioElement>;

  currentUser: User;
  userFullName: string;
  userEmail: string;
  completedModule05: boolean;
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
  audioDuration0501: number;

  constructor(
    private userService: UserService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.initializeUserData();
  }

  async ngAfterViewInit() {
    this.initializeYoutubePlayerPluginWeb();
    this.scripting5StepsAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0501 = this.scripting5StepsAudioRef.nativeElement.duration;
    };
  }

  initializeUserData() {
    this.authService.returnUserData()
    .then((data) => {
      if(data) {
        this.currentUser = data;
        this.userFullName = data.firstName + ' ' + data.lastName;
        this.userEmail = data.email;
        this.completedModule05 = data.completed.work02module05;
        if(this.completedModule05) {
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
        this.completedModule05 = false;
      }
    })
  }

  async initializeYoutubePlayerPluginWeb() {
    const options1 = {playerId: 'youtube-player0501', playerSize: {}, videoId: 'c_X_sPNUDes'};
    const result1 = await YoutubePlayerWeb.initialize(options1);
  }

  async destroyYoutubePlayerPluginWeb() {
    const result1 = await YoutubePlayerWeb.destroy('youtube-player0501');
  }

  markComplete() {
    const moduleCompleted = {
      completed: {
        work02module05: true,
      }
    };
    this.showCompleteBtn = true;
    this.showIncompleteBtn = false;
    this.userService.addModuleComplete('Module 05', moduleCompleted, this.currentUser);
  }

  markIncomplete() {
    const moduleCompleted = {
      completed: {
        work02module05: false,
      }
    };
    this.showCompleteBtn = false;
    this.showIncompleteBtn = true;
    this.userService.removeModuleComplete('Module 05', moduleCompleted, this.currentUser);
  }

  ionViewWillLeave() {
    this.destroyYoutubePlayerPluginWeb();
  }

  ionViewDidEnter() {
    this.initializeYoutubePlayerPluginWeb();
  }
}
