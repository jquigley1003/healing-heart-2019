import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { UserService } from 'src/app/shared/user/user.service';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-module03',
  templateUrl: './module03.page.html',
  styleUrls: ['./module03.page.scss'],
})
export class Module03Page implements OnInit, AfterViewInit {
  @ViewChild('clarifyAudio') clarifyAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('communeWithMichaelAudio') communeWithMichaelAudioRef: ElementRef<HTMLAudioElement>;

  currentUser: User;
  userFullName: string;
  userEmail: string;
  completedModule03: boolean;
  showCompleteBtn: boolean;
  showIncompleteBtn = true;
  assingment0301: boolean;
  assingment0302: boolean;
  assingment0303: boolean;
  assingment0304: boolean;
  assingment0305: boolean;
  audioDuration0301: number;
  audioDuration0302: number;

  constructor(
    private userService: UserService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.initializeUserData();
  }

  async ngAfterViewInit() {
    this.clarifyAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0301 = this.clarifyAudioRef.nativeElement.duration;
    };
    this.communeWithMichaelAudioRef.nativeElement.onloadedmetadata = (event) => {
      this.audioDuration0302 = this.communeWithMichaelAudioRef.nativeElement.duration;
    };
  }

  initializeUserData() {
    this.authService.returnUserData()
    .then((data) => {
      if(data) {
        this.currentUser = data;
        this.userFullName = data.firstName + ' ' + data.lastName;
        this.userEmail = data.email;
        this.completedModule03 = data.completed.work02module03;
        if(this.completedModule03) {
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
        this.completedModule03 = false;
      }
    })
  }

  markComplete() {
    const moduleCompleted = {
      completed: {
        work02module03: true,
      }
    };
    this.showCompleteBtn = true;
    this.showIncompleteBtn = false;
    this.userService.addModuleComplete('Module 03', moduleCompleted, this.currentUser);
  }

  markIncomplete() {
    const moduleCompleted = {
      completed: {
        work02module03: false,
      }
    };
    this.showCompleteBtn = false;
    this.showIncompleteBtn = true;
    this.userService.removeModuleComplete('Module 03', moduleCompleted, this.currentUser);
  }
}
