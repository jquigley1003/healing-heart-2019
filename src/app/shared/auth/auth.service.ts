import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

import { UserService } from '../user/user.service';

import { User } from '../models/user.model';
import { ToastService } from '../notify/toast.service';
import { BehaviorSubject, from, Observable, of } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlertService } from '../notify/alert.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<User>;
  currentUser$: BehaviorSubject<User> = new BehaviorSubject<User>(null);
  isAdmin$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  error = null;

  constructor(
    private afAuth: AngularFireAuth,
    private afStore: AngularFirestore,
    private router: Router,
    private userService: UserService,
    private toastService: ToastService,
    private alertService: AlertService
  ) {
    this.initializeAuth();
   }

  initializeAuth() {
    this.afAuth.onAuthStateChanged(async user => {
      // console.log('Auth Service current user: ',user);
      if(user) {
        this.currentUser$.next(user);
        await user.getIdTokenResult().then((res) =>{
          this.isAdmin$.next(res.claims.admin);
          // console.log('authservice idTokenResult for admin is: ', res.claims.admin);
        });
      } else {
        this.currentUser$.next(null);
        this.isAdmin$.next(false);
      }
    })
    .then(() => this.currentUser$.asObservable())
    .then(() => this.isAdmin$.asObservable());
    // !! implement the code below if you need all current user data (address, image, etc)
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afStore.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of (null);
        }
      })
    );
  }

  returnUserData() {
    return this.user$
    .pipe(
      take(1),
      map(u => u)
    )
    .toPromise()
  }

  uid() {
    return this.user$
      .pipe(
        take(1),
        map(u => u && u.uid)
      )
      .toPromise()
  }

  workshop01Role() {
    return this.user$
      .pipe(
        take(1),
        map(u => u && u.roles.workshop01)
      )
      .toPromise();
  }

  workshop02Role() {
    return this.user$
      .pipe(
        take(1),
        map(u => u && u.roles.workshop02)
      )
      .toPromise();
  }

  async register(newUser) {
    const fullName = newUser.firstName + ' ' + newUser.lastName;

    await this.afAuth.createUserWithEmailAndPassword(newUser.email, newUser.password)
    .then(async (credentials) => {
      await this.userService.createUserData(credentials.user.uid, newUser.email, newUser.firstName, newUser.lastName);
      await credentials.user.updateProfile({
        displayName: fullName
      })
      // ADD CODE BELOW IF SENDING EMAIL VERIFICATION TO NEW USER
      // .then(() => {
      //   credentials.user.sendEmailVerification()
      //   .then(async () => {
      //     console.log('Email verification was sent');
      //     await this.alertService.presentAlert(
      //       'Thank You For Registering!',
      //       'We sent you an email for verification.',
      //       'Click the link in the email to complete your registration',
      //       ['OK']
      //     );
      //   }).catch((err) => {
      //     console.log('Error sending verification email: ', err);
      //     this.handleError(err);
      //   });
      // })
      .catch((err) => {
        console.log('Error adding displayName: ', err);
        this.handleError(err);
      });
    }).catch((err) => {
      console.log('Error creating new user: ', err);
      this.handleError(err);
    });
  }

  signIn({ email, password }) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  async signOut() {
    await this.afAuth.signOut();
    return this.router.navigate(['./home']);
  }

  private handleError(error: Error) {
    console.error(error);
    this.toastService.presentToast(
      error.message,
      'middle',
      [{
        text: 'OK',
        role: 'cancel',
      }], 15000);
  }
}
