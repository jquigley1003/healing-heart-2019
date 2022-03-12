import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { UserService } from 'src/app/shared/user/user.service';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-module01',
  templateUrl: './module01.page.html',
  styleUrls: ['./module01.page.scss'],
})
export class Module01Page implements OnInit {
  @ViewChild('weedOutButsAudio') weedOutButsAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('listTheButsAudio') listTheButsAudioRef: ElementRef<HTMLAudioElement>;

  currentUser: User;
  userFullName: string;
  userEmail: string;
  completedModule01: boolean;
  showCompleteBtn: boolean;
  showIncompleteBtn = true;
  assignment0101: boolean;
  assingment0102: boolean;
  assingment0103: boolean;
  assingment0104: boolean;
  assingment0105: boolean;
  assingment0106: boolean;
  assingment0107: boolean;
  assingment0108: boolean;
  assingment0109: boolean;
  assingment0110: boolean;
  audioDuration0101: number;
  audioDuration0102: number;
 

  constructor(
    private userService: UserService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.initializeUserData();
  }

  async ngAfterViewInit() {
    this.weedOutButsAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0101 = this.weedOutButsAudioRef.nativeElement.duration;
    };
    this.listTheButsAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0102 = this.listTheButsAudioRef.nativeElement.duration;
    };
  }

  initializeUserData() {
    this.authService.returnUserData()
    .then((data) => {
      if(data) {
        this.currentUser = data;
        this.userFullName = data.firstName + ' ' + data.lastName;
        this.userEmail = data.email;
        this.completedModule01 = data.completed.work02module01;
        if(this.completedModule01) {
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
        this.completedModule01 = false;
      }
    })
  }

  markComplete() {
    const moduleCompleted = {
      completed: {
        work02module01: true,
      }
    };
    this.showCompleteBtn = true;
    this.showIncompleteBtn = false;
    this.userService.addModuleComplete('Module 01', moduleCompleted, this.currentUser);
  }

  markIncomplete() {
    const moduleCompleted = {
      completed: {
        work02module01: false,
      }
    };
    this.showCompleteBtn = false;
    this.showIncompleteBtn = true;
    this.userService.removeModuleComplete('Module 01', moduleCompleted, this.currentUser);
  }
}
