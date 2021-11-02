import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { take } from 'rxjs/operators';

import { AuthService } from '../auth/auth.service';
import { AlertService } from '../notify/alert.service';

@Injectable({
  providedIn: 'root'
})

export class Workshop01Guard implements CanActivate {
  isWorkshop01 = false;
  constructor(
    private authService: AuthService,
    private router: Router,
    private alertService: AlertService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): boolean {
      this.authService.user$
      .pipe(take(1))
      .subscribe(res => {
        if(!res) {
          this.alertService.presentAlert(
            'Blocked',
            'You are not authorized!',
            'You must sign in to access this course.',
            ['OK']
          );
          this.router.navigate(['/home']);
        } else {
          const workshop01Role = res.roles.workshop01;
          if(!workshop01Role) {
            this.isWorkshop01 = false;
            this.alertService.presentAlert(
              'Blocked',
              'You are not authorized!',
              'You must signup and pay for  Workshop 01 - Marry Yourself Journey.',
              ['OK']
            );
            this.router.navigate(['/home']);
          } else {
            this.isWorkshop01 = true;
          }
        }
      });
    return this.isWorkshop01;
  }
}
