import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { UserService } from 'src/app/shared/user/user.service';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { User } from 'src/app/shared/models/user.model';
@Component({
  selector: 'app-module04',
  templateUrl: './module04.page.html',
  styleUrls: ['./module04.page.scss'],
})
export class Module04Page implements OnInit, AfterViewInit {
  @ViewChild('selfForgivenessAudio') selfForgivenessAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('selfForgivenessAssignAudio') selfForgivenessAssignAudioRef: ElementRef<HTMLAudioElement>;

  currentUser: User;
  userFullName: string;
  userEmail: string;
  completedModule04: boolean;
  showCompleteBtn: boolean;
  showIncompleteBtn = true;
  assignment0401: boolean;
  assingment0402: boolean;
  assingment0403: boolean;
  assingment0404: boolean;
  assingment0405: boolean;
  assingment0406: boolean;
  assingment0407: boolean;
  audioDuration0401: number;
  audioDuration0402: number;

  constructor(
    private userService: UserService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.initializeUserData();
  }

  async ngAfterViewInit() {
    this.selfForgivenessAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0401 = this.selfForgivenessAudioRef.nativeElement.duration;
    };
    this.selfForgivenessAssignAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0402 = this.selfForgivenessAssignAudioRef.nativeElement.duration;
    };
  }

  initializeUserData() {
    this.authService.returnUserData()
    .then((data) => {
      if(data) {
        this.currentUser = data;
        this.userFullName = data.firstName + ' ' + data.lastName;
        this.userEmail = data.email;
        this.completedModule04 = data.completed.work02module04;
        if(this.completedModule04) {
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
        this.completedModule04 = false;
      }
    })
  }

  markComplete() {
    const moduleCompleted = {
      completed: {
        work02module04: true,
      }
    };
    this.showCompleteBtn = true;
    this.showIncompleteBtn = false;
    this.userService.addModuleComplete('Module 04', moduleCompleted, this.currentUser);
  }

  markIncomplete() {
    const moduleCompleted = {
      completed: {
        work02module04: false,
      }
    };
    this.showCompleteBtn = false;
    this.showIncompleteBtn = true;
    this.userService.removeModuleComplete('Module 04', moduleCompleted, this.currentUser);
  }
}
