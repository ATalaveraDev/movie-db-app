import { Component, Input } from '@angular/core';

import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  private subViews: Array<any>;

  constructor(private router: Router) {
    this.subViews = [];

    this.router.events.filter(event => event instanceof NavigationEnd).subscribe((ev: NavigationEnd) => {
      switch (ev.url) {
        case '/shows':
          this.subViews = [{name: 'On Air'}, {name: 'Latest'}];
          break;
        default:
        this.subViews = [];
      }
    });
  }
}
