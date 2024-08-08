import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { TokenService } from '../services/token.service';

@Injectable({
  providedIn: "root"
})

export class AuthGuard  {
  constructor(private router: Router, private tokenService: TokenService) { }

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (this.tokenService.getToken()) {
      return true;
    }

    this.router.navigate(["/login"]);
    return false;
  }
}