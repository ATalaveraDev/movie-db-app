import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { CookieService } from 'ngx-cookie-service';

import { AppService } from '../../../app.service';

@Component({
  templateUrl: 'token-page.component.html'
})
export class TokenPageComponent {
  constructor(private appService: AppService, private router: Router, private cookieService: CookieService) {
    this.appService.requestAccessToken();

    this.appService.accessGranted$.subscribe((access: boolean) => {
      if (access) {
        this.navigate();
      }
    });
  }

  private navigate(): void {
    if (this.cookieService.get('url')) {
      this.router.navigate([this.cookieService.get('url')]);
      this.cookieService.delete('url');
    }
    else {
      this.router.navigate(['lists']);
    }
  }
}