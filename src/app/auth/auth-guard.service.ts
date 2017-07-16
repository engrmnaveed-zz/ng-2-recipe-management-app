import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

import { AuthService } from './auth.service';
import {ToastrService} from 'ngx-toastr';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private toastrService: ToastrService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const auth = this.authService.isAuthenticated();
    if (!auth) {
      this.toastrService.info('You Does not have the permissions to Access this page!', 'Access Denied!', {
        positionClass: 'toast-bottom-left'
      });
    }
    return auth;
  }
}
