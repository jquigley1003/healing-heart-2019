import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { UserService } from 'src/app/shared/user/user.service';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { User } from 'src/app/shared/models/user.model';
@Component({
  selector: 'app-module06',
  templateUrl: './module06.page.html',
  styleUrls: ['./module06.page.scss'],
})
export class Module06Page implements OnInit, AfterViewInit {
  @ViewChild('attractionAudio') attractionAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('lawOfVibrationAudio') lawOfVibrationAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('developingAttractionAudio') developingAttractionAudioRef: ElementRef<HTMLAudioElement>;

  currentUser: User;
  userFullName: string;
  userEmail: string;
  completedModule06: boolean;
  showCompleteBtn: boolean;
  showIncompleteBtn = true;
  assignment0601: boolean;
  assingment0602: boolean;
  
  audioDuration0601: number;
  audioDuration0602: number;
  audioDuration0603: number;

  constructor(
    private userService: UserService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.initializeUserData();
  }

  async ngAfterViewInit() {
    this.attractionAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0601 = this.attractionAudioRef.nativeElement.duration;
    };
    this.lawOfVibrationAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0602 = this.lawOfVibrationAudioRef.nativeElement.duration;
    };
    this.developingAttractionAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0603 = this.developingAttractionAudioRef.nativeElement.duration;
    };
  }

  initializeUserData() {
    this.authService.returnUserData()
    .then((data) => {
      if(data) {
        this.currentUser = data;
        this.userFullName = data.firstName + ' ' + data.lastName;
        this.userEmail = data.email;
        this.completedModule06 = data.completed.work02module06;
        if(this.completedModule06) {
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
        this.completedModule06 = false;
      }
    })
  }

  markComplete() {
    const moduleCompleted = {
      completed: {
        work02module06: true,
      }
    };
    this.showCompleteBtn = true;
    this.showIncompleteBtn = false;
    this.userService.addModuleComplete('Module 06', moduleCompleted, this.currentUser);
  }

  markIncomplete() {
    const moduleCompleted = {
      completed: {
        work02module06: false,
      }
    };
    this.showCompleteBtn = false;
    this.showIncompleteBtn = true;
    this.userService.removeModuleComplete('Module 06', moduleCompleted, this.currentUser);
  }
}
