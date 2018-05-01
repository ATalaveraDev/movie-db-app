import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './lists-page.component.html'
})
export class ListsPageComponent {
  searchForm: FormGroup;

  constructor() {
    this.searchForm =  new FormGroup({
      title: new FormControl('', [Validators.required])
    });
  }

  search(): void {

  }
}