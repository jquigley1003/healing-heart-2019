import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { User } from '../shared/models/user.model';
import { AlertService } from '../shared/notify/alert.service';
import { ToastService } from '../shared/notify/toast.service';
import { UserService } from '../shared/user/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit, OnDestroy {
  ngUnsubscribe = new Subject<void>();
  users: User[];
  loadedUsers: User[];

  constructor(
    private router: Router,
    private modalCtrl: ModalController,
    private userService: UserService,
    private alertService: AlertService,
    private toastService: ToastService
  ) {}

  ngOnInit() {
    this.getAllUsers();
  }

  async getAllUsers() {
    this.userService.allUsers$
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(async data => {
        this.users = data;
        this.loadedUsers = data;
      });
  }

  initializeList() {
    this.users = this.loadedUsers;
  }

  filterByName(event) {
    this.initializeList();
    const searchTerm = event.srcElement.value;

    if(!searchTerm) {
      return;
    }
    this.users = this.users.filter(person => {
      if((person.firstName + ' ' + person.lastName) && searchTerm) {
        if ((person.firstName+ ' ' + person.lastName).toLowerCase()
          .indexOf(searchTerm.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });
  }

  makeAdmin(user) {
    this.userService.makeUserAdmin(user);
  }

  removeAdmin(user) {
    if(user.email == "devajoy@me.com" || "jeff.quigley@wavinghi.com") {
      this.toastService.presentToast(
        `This user is a main admin, you can not remove admin role from ${user.email}.`,
        'middle',
        [{
          text: 'OK',
          role: 'cancel',
        }], 5000);
    } else {
      this.userService.removeAdminRole(user);
    }
  }

  giveAccessWorkshop01(user) {
    this.userService.addWorkshop01Role(user);
  }

  removeAccessWorkshop01(user) {
    this.userService.removeWorkshop01Role(user);
  }

  async deleteUser(user: User) {
    this.alertService.presentAlert(
      'Are You Sure?',
      'You will permanently delete ' + user.firstName + ' ' + user.lastName,
      'Choosing "Yes, Delete" will permanently remove this user from the database',
      [
        {
          text: 'Cancel',
          cssClass: 'alertCancel',
          role: 'cancel',
          handler: () => {
            console.log('You did not delete '+user.firstName);
            this.toastService.presentToast(
              `Deletion of ${user.firstName} canceled.`,
              'middle',
              [{
                text: 'OK',
                role: 'cancel',
              }], 5000);
          }
        },
        {
          text: 'Yes, Delete',
          cssClass: 'alertDanger',
          handler: () => {
            this.deleteUserConfirmed(user.uid, user.email);
          }
        }
      ]
    );
  }

  deleteUserConfirmed(userId, userEmail) {
    // if(userEmail == "devajoy@me.com" || "jeff.quigley@wavinghi.com") {
    //     this.toastService.presentToast(
    //       `${userEmail} is main admin of this web app and can not be deleted`,
    //       'middle',
    //       [{
    //         text: 'OK',
    //         role: 'cancel',
    //       }], 5000);
    // } else {
      this.userService.deleteUser(userId);
    // }
  }

  goHome() {
    this.router.navigate(['/home']);
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }  
}
