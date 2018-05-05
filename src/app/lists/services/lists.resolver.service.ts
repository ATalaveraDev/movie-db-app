import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { AppService } from '../../app.service';

@Injectable()
export class ListsResolver implements Resolve<string> {
  constructor(private appService: AppService) { }

  resolve(): string {
    return this.appService.getAccountId();
  }
}