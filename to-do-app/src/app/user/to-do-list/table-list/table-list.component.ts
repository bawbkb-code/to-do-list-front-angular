import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';
import { TokenService } from 'src/app/shared/services/token.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss'],
})
export class TableListComponent {
  model : any =[];
  constructor(private apiService: ApiService,private tokenService: TokenService,private router: Router) {}

  ngOnInit() {
    this.getTodos();
  }

  getTodos() {
    this.apiService.get("todo").subscribe((response :any)=>{
      this.model = response.data;
    })
  }

  delete(id:string) {
    this.apiService.delete("todo/"+id).subscribe((response :any)=>{
      window.alert("Delete Success")
      this.model = response.data;
    })
  }

  goToPage(path :string){
    this.router.navigate(["/user/to-do-list/"+path]);
  }

}
