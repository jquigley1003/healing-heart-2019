import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';

import { AuthService } from '../auth/auth.service';
import { AlertService } from '../notify/alert.service';

@Injectable({
  providedIn: 'root'
})
export class Workshop02Guard implements CanActivateChild {
  constructor(
    private authService: AuthService,
    private router: Router,
    private alertService: AlertService
  ) {}

  async canActivateChild(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Promise<boolean> {
      const workshop02Role = await this.authService.workshop02Role();
      const isWorkshop02 = !!workshop02Role;

      if(!isWorkshop02) {
        this.alertService.presentAlert(
          'Blocked',
          'You are not authorized!',
          'You must request access for Workshop 02 - Tribute To Donna.',
          ['OK']
        );
        this.router.navigate(['/home']);
      }
      return isWorkshop02;
  }
}
