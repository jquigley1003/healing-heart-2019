import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { User } from 'src/app/shared/models/user.model';
import { Assignment } from 'src/app/shared/models/assignment.model';
import { UserService } from 'src/app/shared/user/user.service';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { AssignmentService } from 'src/app/shared/assignment/assignment.service';

@Component({
  selector: 'app-module01',
  templateUrl: './module01.page.html',
  styleUrls: ['./module01.page.scss'],
})
export class Module01Page implements OnInit, OnDestroy {
  @ViewChild('weedOutButsAudio') weedOutButsAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('listTheButsAudio') listTheButsAudioRef: ElementRef<HTMLAudioElement>;

  ngUnsubscribe = new Subject<void>();
  currentUser: User;
  userFullName: string;
  userEmail: string;
  completedModule01: boolean;
  showCompleteBtn: boolean;
  showIncompleteBtn = true;
  assignments: Assignment;
  work02assign0101: boolean;
  work02assign0102: boolean;
  work02assign0103: boolean;
  work02assign0104: boolean;
  work02assign0105: boolean;
  work02assign0106: boolean;
  work02assign0107: boolean;
  work02assign0108: boolean;
  work02assign0109: boolean;
  work02assign0110: boolean;
  audioDuration0101: number;
  audioDuration0102: number;
 

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

  initializeUserAssignments() {
    this.assignmentService.getUserAssignments()
    .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(data => {
        this.assignments = data;
        this.work02assign0101 = this.assignments.work02assign0101;
        this.work02assign0102 = this.assignments.work02assign0102;
        this.work02assign0103 = this.assignments.work02assign0103;
        this.work02assign0104 = this.assignments.work02assign0104;
        this.work02assign0105 = this.assignments.work02assign0105;
        this.work02assign0106 = this.assignments.work02assign0106;
        this.work02assign0107 = this.assignments.work02assign0107;
        this.work02assign0108 = this.assignments.work02assign0108;
        this.work02assign0109 = this.assignments.work02assign0109;
        this.work02assign0110 = this.assignments.work02assign0110;
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

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
