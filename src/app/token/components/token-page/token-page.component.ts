import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AppService } from '../../../app.service';

@Component({
  templateUrl: 'token-page.component.html'
})
export class TokenPageComponent {
  constructor(private appService: AppService, private router: Router) {
    this.appService.requestAccessToken();

    this.appService.accessGranted$.subscribe((access: boolean) => {
      if (access) {
        this.router.navigate(['lists']);
      }
    });
  }
}