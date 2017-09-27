import { Component } from '@angular/core';

import { ListsService } from './lists.service';
import { List } from './list.model';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent {
  list: List;

  constructor(private service: ListsService) {
    this.list = new List('Test', 'Description Test', 'en');
    this.service.getLists();
  }

  createList() {
    this.service.createList(this.list);
  }
}
