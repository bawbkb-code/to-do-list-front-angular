import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';
import { TokenService } from 'src/app/shared/services/token.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  txtView!: string;
  model:any={};
  username!:string;
  constructor(private apiService:ApiService,private router:Router,private tokenService:TokenService){}

  ngOnInit() {
    this.model.isListMode = true;
    this.txtView = "List Mode";

  }

  switchView(): void {
    this.model.isListMode = !this.model.isListMode;
    if (this.model.isListMode) {
      this.txtView = "Calendar Mode";
    } else {
      this.txtView = "List Mode";
    }
  }

  goToPage(path :string){
    this.router.navigate(["/user/to-do-list/"+path]);
  }

  logout(){
    this.router.navigate(["/logout"]);
  }
}
