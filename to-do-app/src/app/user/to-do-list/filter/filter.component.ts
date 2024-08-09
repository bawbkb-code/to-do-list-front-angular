import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { SwitchService } from 'src/app/shared/services/switch.service';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  txtView!: string;
  model:any={};
  username!:string;

  constructor(private router:Router,private switchService:SwitchService){}

  ngOnInit() {
    this.model.isListMode = this.switchService.switchViewState();
    this.txtView = "List Mode";
  }

  switchViewMode(): void {
    this.switchService.switch();
    this.model.isListMode = this.switchService.switchViewState(); 
    if (this.model.isListMode) {
      this.txtView = "Table Mode";
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
