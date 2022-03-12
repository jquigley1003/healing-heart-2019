import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { UserService } from 'src/app/shared/user/user.service';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { AssignmentService } from 'src/app/shared/assignment/assignment.service';
import { User } from 'src/app/shared/models/user.model';
import { Assignment } from 'src/app/shared/models/assignment.model';

@Component({
  selector: 'app-module03',
  templateUrl: './module03.page.html',
  styleUrls: ['./module03.page.scss'],
})
export class Module03Page implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('clarifyAudio') clarifyAudioRef: ElementRef<HTMLAudioElement>;
  @ViewChild('communeWithMichaelAudio') communeWithMichaelAudioRef: ElementRef<HTMLAudioElement>;

  ngUnsubscribe = new Subject<void>();
  currentUser: User;
  userFullName: string;
  userEmail: string;
  completedModule03: boolean;
  showCompleteBtn: boolean;
  showIncompleteBtn = true;
  assignments: Assignment;
  work02assign0301: boolean;
  work02assign0302: boolean;
  work02assign0303: boolean;
  work02assign0304: boolean;
  work02assign0305: boolean;
  audioDuration0301: number;
  audioDuration0302: number;

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

  initializeUserAssignments() {
    this.assignmentService.getUserAssignments()
    .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(data => {
        this.assignments = data;
        this.work02assign0301 = this.assignments.work02assign0301;
        this.work02assign0302 = this.assignments.work02assign0302;
        this.work02assign0303 = this.assignments.work02assign0303;
        this.work02assign0304 = this.assignments.work02assign0304;
        this.work02assign0305 = this.assignments.work02assign0305;
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

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();  
  }
}
