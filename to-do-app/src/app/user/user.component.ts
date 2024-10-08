import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  constructor(private router: Router){

  }
  goToPage(url: string){
    this.router.navigate(["/user/"+url])
  }
}
