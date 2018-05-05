import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private cookieService: CookieService, private router: Router) { }

  canActivate(): boolean {
    if (this.cookieService.get('request_token') && this.cookieService.get('api_token')) {
      return true;
    }
    else {
      this.router.navigate(['authenticate']);

      return false;
    }
  }
}