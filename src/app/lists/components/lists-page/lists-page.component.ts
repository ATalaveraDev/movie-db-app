import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { SearchService } from '../../services/search.service';

@Component({
  templateUrl: './lists-page.component.html'
})
export class ListsPageComponent {
  searchForm: FormGroup;

  constructor(private searchService: SearchService) {
    this.searchForm =  new FormGroup({
      title: new FormControl('', [Validators.required])
    });
  }

  search(): void {
    this.searchService.byTitle(this.searchForm.value.title).subscribe(res => console.log(res));
  }
}