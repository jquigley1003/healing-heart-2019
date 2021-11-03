import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { take } from 'rxjs/operators';

import { AuthService } from '../auth/auth.service';
import { AlertService } from '../notify/alert.service';

@Injectable({
  providedIn: 'root'
})

export class Workshop01Guard implements CanActivateChild {
  constructor(
    private authService: AuthService,
    private router: Router,
    private alertService: AlertService
  ) {}

  async canActivateChild(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Promise<boolean> {
      const workshop01Role = await this.authService.workshop01Role();
      const isWorkshop01 = !!workshop01Role;

      if(!isWorkshop01) {
        this.alertService.presentAlert(
          'Blocked',
          'You are not authorized!',
          'You must signup and pay for  Workshop 01 - Marry Yourself Journey.',
          ['OK']
        );
        this.router.navigate(['/home']);
      }
      return isWorkshop01;
  }
}
