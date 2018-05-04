import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { SearchService } from '../../services/search.service';
import { ListsService } from '../../services/lists.service';
import { AppService } from '../../../app.service';

@Component({
  templateUrl: './lists-page.component.html'
})
export class ListsPageComponent {
  searchForm: FormGroup;

  constructor(private searchService: SearchService, private listsService: ListsService, private appService: AppService) {
    this.searchForm =  new FormGroup({
      title: new FormControl('', [Validators.required])
    });

    this.listsService.getAll(this.appService.account_id).subscribe(res => console.log(res));
  }

  search(): void {
    this.searchService.byTitle(this.searchForm.value.title).subscribe(res => console.log(res));
  }
}