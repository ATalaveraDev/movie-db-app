import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ListsService } from '../../movies/lists/lists.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridComponent {
  constructor(private listSrv: ListsService, private router: Router) {
    this.listSrv.getLists();
  }

  accessList(id): void {
    this.router.navigate(['/lists/' + id]);
  }
}
