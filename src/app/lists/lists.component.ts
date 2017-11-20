import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'lists.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListsComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
