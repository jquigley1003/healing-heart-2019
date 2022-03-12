import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { UserService } from 'src/app/shared/user/user.service';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { AssignmentService } from 'src/app/shared/assignment/assignment.service';
import { User } from 'src/app/shared/models/user.model';
import { Assignment } from 'src/app/shared/models/assignment.model';

@Component({
  selector: 'app-module04',
  templateUrl: './module04.page.html',
  styleUrls: ['./module04.page.scss'],
})
export class Module04Page implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('selfForgivenessAudio') selfForgivenessAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('selfForgivenessAssignAudio') selfForgivenessAssignAudioRef: ElementRef<HTMLAudioElement>;

  ngUnsubscribe = new Subject<void>();
  currentUser: User;
  userFullName: string;
  userEmail: string;
  completedModule04: boolean;
  showCompleteBtn: boolean;
  showIncompleteBtn = true;
  assignments: Assignment;
  work02assign0401: boolean;
  work02assign0402: boolean;
  work02assign0403: boolean;
  work02assign0404: boolean;
  work02assign0405: boolean;
  work02assign0406: boolean;
  work02assign0407: boolean;
  audioDuration0401: number;
  audioDuration0402: number;

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

  initializeUserAssignments() {
    this.assignmentService.getUserAssignments()
    .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(data => {
        this.assignments = data;
        this.work02assign0401 = this.assignments.work02assign0401;
        this.work02assign0402 = this.assignments.work02assign0402;
        this.work02assign0403 = this.assignments.work02assign0403;
        this.work02assign0404 = this.assignments.work02assign0404;
        this.work02assign0405 = this.assignments.work02assign0405;
        this.work02assign0405 = this.assignments.work02assign0405;
        this.work02assign0406 = this.assignments.work02assign0406;
        this.work02assign0407 = this.assignments.work02assign0407;
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

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();  
  }
}
