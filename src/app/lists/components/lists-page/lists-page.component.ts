import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Data } from '@angular/router';

import { SearchService } from '../../services/search.service';
import { ListsService } from '../../services/lists.service';

@Component({
  templateUrl: './lists-page.component.html'
})
export class ListsPageComponent {
  searchForm: FormGroup;

  constructor(private searchService: SearchService, private listsService: ListsService, private route: ActivatedRoute) {
    this.searchForm =  new FormGroup({
      title: new FormControl('', [Validators.required])
    });

    this.route.data.subscribe((data: Data) => this.listsService.getAll(data.accountId)
      .subscribe(res => console.log(res)));
  }

  search(): void {
    this.searchService.byTitle(this.searchForm.value.title).subscribe(res => console.log(res));
  }
}