import { Component } from "@angular/core";

import { SearchService } from "app/search/search.service";

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  constructor(private service: SearchService) { }

  onKey(value: string): void {
    if (value.length > 1) {
      this.service.search(value);
    }
  }
}