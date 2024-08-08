import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../shared/services/token.service';

@Component({
  selector: 'app-auth-inject',
  templateUrl: './auth-inject.component.html',
  styleUrls: ['./auth-inject.component.scss']
})
export class AuthInjectComponent {
  token : string = ""; 
  constructor(private router: Router,private tokenService : TokenService){}
  ngOnInit() {
    this.token = this.tokenService.getToken() || "";
    if (this.token === ""){
      this.router.navigate(["/login"]);
    }else{
      this.router.navigate(["/user"]);
    }
  }
}
