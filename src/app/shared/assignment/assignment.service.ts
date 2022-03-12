import { Injectable, OnDestroy } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

import { Assignment } from '../models/assignment.model';
import { LoadingService } from '../notify/loading.service';
import { ToastService } from '../notify/toast.service';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService implements OnDestroy {
  ngUnsubscribe = new Subject<void>();
  fetchUserAssignments$: Observable<any>;
  userAssignments$: BehaviorSubject<Assignment>;

  constructor(
    private afStore: AngularFirestore,
    private loadingService: LoadingService,
    private toastService: ToastService
  ) { }

  async initializeAssignments(assId) {
    if(!this.userAssignments$) {
      this.userAssignments$ = new BehaviorSubject<any>([]);
      this.afStore.doc<Assignment>(`assignments/${assId}`).valueChanges()
      .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe(
            res => {
            this.userAssignments$.next(res);
          },
        err => console.log('Error retrieving Assignments: ', err)
        );
    } else {
    }
  }

  getUserAssignments() {
    return this.userAssignments$.asObservable();
  }

  async assignmentComplete(assignmentName, assignmentComplete, user) {
    await this.loadingService.presentLoading(
      '...please wait while we mark this assignment complete',
      'bubbles',
    10000,
    );
    // console.log('assignment complete data is: ', assignmentComplete);
    const data = assignmentComplete;
    this.afStore.doc(`assignments/${user.uid}`).set(data, {merge: true})
    .then(() => {
      this.loadingService.dismissLoading();
      this.toastService.presentToast(
        `${user.firstName} has completed ${assignmentName}!`,
        'middle',
        [{
          text: 'OK',
          role: 'cancel',
        }], 5000 );
    })
    .catch(err => {
      this.loadingService.dismissLoading();
      this.toastService.presentToast(
        `Sorry, try again. There was a problem marking ${assignmentName} as complete.`,
        'middle',
        [{
          text: 'OK',
          role: 'cancel',
        }], 5000);
    });
  }

  async assignmentIncomplete(assignmentName, assignmentComplete, user) {
    await this.loadingService.presentLoading(
      '...please wait while we mark this assignment incomplete',
      'bubbles',
    10000,
    );
    const data = assignmentComplete;
    // console.log('assignment incompleted data is: ', data);
    this.afStore.doc(`assignments/${user.uid}`).set(data, {merge: true})
    .then(() => {
      this.loadingService.dismissLoading();
      this.toastService.presentToast(
        `${user.firstName} has not completed ${assignmentName}.`,
        'middle',
        [{
          text: 'OK',
          role: 'cancel',
        }], 5000 );
    })
    .catch(err => {
      this.loadingService.dismissLoading();
      this.toastService.presentToast(
        `Sorry, try again. There was a problem marking ${assignmentName} as incomplete.`,
        'middle',
        [{
          text: 'OK',
          role: 'cancel',
        }], 5000);
    });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();  
  }
}
