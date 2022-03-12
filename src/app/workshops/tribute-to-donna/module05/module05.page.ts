import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { YoutubePlayerWeb } from 'capacitor-youtube-player'; // Web version

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { UserService } from 'src/app/shared/user/user.service';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { AssignmentService } from 'src/app/shared/assignment/assignment.service';
import { User } from 'src/app/shared/models/user.model';
import { Assignment } from 'src/app/shared/models/assignment.model';

@Component({
  selector: 'app-module05',
  templateUrl: './module05.page.html',
  styleUrls: ['./module05.page.scss'],
})
export class Module05Page implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('scripting5StepsAudio') scripting5StepsAudioRef: ElementRef<HTMLAudioElement>;

  ngUnsubscribe = new Subject<void>();
  currentUser: User;
  userFullName: string;
  userEmail: string;
  completedModule05: boolean;
  showCompleteBtn: boolean;
  showIncompleteBtn = true;
  assignments: Assignment;
  work02assign0501: boolean;
  work02assign0502: boolean;
  work02assign0503: boolean;
  work02assign0504: boolean;
  work02assign0505: boolean;
  audioDuration0501: number;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private assignmentService: AssignmentService
  ) { }

  ngOnInit() {
    this.initializeUserData();
    this.initializeUserAssignments();
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

  initializeUserAssignments() {
    this.assignmentService.getUserAssignments()
    .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(data => {
        this.assignments = data;
        this.work02assign0501 = this.assignments.work02assign0501;
        this.work02assign0502 = this.assignments.work02assign0502;
        this.work02assign0503 = this.assignments.work02assign0503;
        this.work02assign0504 = this.assignments.work02assign0504;
        this.work02assign0505 = this.assignments.work02assign0505;
      });
  }

  async initializeYoutubePlayerPluginWeb() {
    const options1 = {playerId: 'youtube-player0501', playerSize: {}, videoId: 'c_X_sPNUDes'};
    const result1 = await YoutubePlayerWeb.initialize(options1);
  }

  async destroyYoutubePlayerPluginWeb() {
    const result1 = await YoutubePlayerWeb.destroy('youtube-player0501');
  }

  assignmentCheck(assignment) {
    // console.log('result of check: ', assignment);
    const assignmentComplete = {
      userName: this.currentUser.firstName + ' ' + this.currentUser.lastName,
      [assignment]: true
    };
    // console.log('========= ',assignment,' CHECKED');
    this.assignmentService.assignmentComplete(assignment, assignmentComplete, this.currentUser);
  }

  assignmentUncheck(assignment) {
    // console.log('result of check: ', assignment);
    const assignmentComplete = {
      userName: this.currentUser.firstName + ' ' + this.currentUser.lastName,
      [assignment]: false
    };
    // console.log('========= ',assignment,' UNCHECKED');
    this.assignmentService.assignmentIncomplete(assignment, assignmentComplete, this.currentUser);
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

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();  
  }
}
