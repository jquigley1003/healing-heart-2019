import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { AuthService } from '../auth/auth.service';
import { AlertService } from '../notify/alert.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private alertService: AlertService
  ) {}

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Promise<boolean> {
    const uid = await this.authService.uid();
    const isLoggedIn = !!uid;

    if(!isLoggedIn) {
      this.alertService.presentAlert(
        'Blocked',
        'Please sign in!',
        'You need to sign in to access this page',
        ['OK']
      );
      this.router.navigate(['/home']);
    }
    return isLoggedIn;
  }
}
