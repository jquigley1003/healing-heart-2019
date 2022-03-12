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
  selector: 'app-module02',
  templateUrl: './module02.page.html',
  styleUrls: ['./module02.page.scss'],
})
export class Module02Page implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('lovingYourselfAudio') lovingYourselfAudioRef: ElementRef<HTMLAudioElement>;

  ngUnsubscribe = new Subject<void>();
  currentUser: User;
  userFullName: string;
  userEmail: string;
  completedModule02: boolean;
  showCompleteBtn: boolean;
  showIncompleteBtn = true;
  assignments: Assignment;
  work02assign0201: boolean;
  work02assign0202: boolean;
  work02assign0203: boolean;
  work02assign0204: boolean;
  work02assign0205: boolean;
  work02assign0206: boolean;
  work02assign0207: boolean;
  work02assign0208: boolean;
  audioDuration0201: number;

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

  initializeUserAssignments() {
    this.assignmentService.getUserAssignments()
    .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(data => {
        this.assignments = data;
        this.work02assign0201 = this.assignments.work02assign0201;
        this.work02assign0202 = this.assignments.work02assign0202;
        this.work02assign0203 = this.assignments.work02assign0203;
        this.work02assign0204 = this.assignments.work02assign0204;
        this.work02assign0205 = this.assignments.work02assign0205;
        this.work02assign0206 = this.assignments.work02assign0206;
        this.work02assign0207 = this.assignments.work02assign0207;
        this.work02assign0208 = this.assignments.work02assign0208;
      });
  }

  async initializeYoutubePlayerPluginWeb() {
    const options1 = {playerId: 'youtube-player0201', playerSize: {}, videoId: 'XLFEvHWD_NE'};
    const result1 = await YoutubePlayerWeb.initialize(options1);
  }

  async destroyYoutubePlayerPluginWeb() {
    const result1 = await YoutubePlayerWeb.destroy('youtube-player0201');
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

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();   
  }
}
