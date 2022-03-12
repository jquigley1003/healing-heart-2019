import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { UserService } from 'src/app/shared/user/user.service';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { AssignmentService } from 'src/app/shared/assignment/assignment.service';
import { User } from 'src/app/shared/models/user.model';
import { Assignment } from 'src/app/shared/models/assignment.model';

@Component({
  selector: 'app-module06',
  templateUrl: './module06.page.html',
  styleUrls: ['./module06.page.scss'],
})
export class Module06Page implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('attractionAudio') attractionAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('lawOfVibrationAudio') lawOfVibrationAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('developingAttractionAudio') developingAttractionAudioRef: ElementRef<HTMLAudioElement>;

  ngUnsubscribe = new Subject<void>();
  currentUser: User;
  userFullName: string;
  userEmail: string;
  completedModule06: boolean;
  showCompleteBtn: boolean;
  showIncompleteBtn = true;
  assignments: Assignment;
  work02assign0601: boolean;
  work02assign0602: boolean;
  work02assign0603: boolean;
  work02assign0604: boolean;
  audioDuration0601: number;
  audioDuration0602: number;
  audioDuration0603: number;

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

  initializeUserAssignments() {
    this.assignmentService.getUserAssignments()
    .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(data => {
        this.assignments = data;
        this.work02assign0601 = this.assignments.work02assign0601;
        this.work02assign0602 = this.assignments.work02assign0602;
        this.work02assign0603 = this.assignments.work02assign0603;
        this.work02assign0604 = this.assignments.work02assign0604;
      });
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

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();  
  }
}
