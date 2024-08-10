import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';
import { SwitchService } from 'src/app/shared/services/switch.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss'],
})
export class TableListComponent {
  model: any = [];
  modelMap: any = [];
  constructor(
    private apiService: ApiService,
    public switchService: SwitchService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getTodos();
  }

  getTodos() {
    this.apiService.get('todo').subscribe((response: any) => {
      this.model = response.data;
      this.modelMap = this.mapData(response.data);
    });
  }

  mapData(data: any) {
    const columns: any[] = [
      { key: 'id', name: 'ID' },
      { key: 'no', name: 'No.' },
      { key: 'title', name: 'Title' },
      { key: 'desc', name: 'Description' },
      { key: 'date', name: 'Created Date' },
    ];

    const modelMap = data.map((item: any, index: number) => {
      const formattedDate = new Date(item.created_at).toLocaleString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      }).replace(',', '');
      return [item.id, index + 1, item.title, item.description, formattedDate];
    });

    return {
      columns,
      data: modelMap,
    };
  }

  delete(id: string) {
    this.apiService.delete('todo/' + id).subscribe((response: any) => {
      window.alert('Delete Success');
      this.model = response.data;
    });
  }

  goToPage(path: string) {
    this.router.navigate(['/user/to-do-list/' + path]);
  }
}
