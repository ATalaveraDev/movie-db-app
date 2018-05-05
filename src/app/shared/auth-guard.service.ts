import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private cookieService: CookieService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.cookieService.get('request_token') && this.cookieService.get('api_token')) {
      return true;
    }
    else {
      this.cookieService.set('url', state.url);
      this.router.navigate(['authenticate']);

      return false;
    }
  }
}