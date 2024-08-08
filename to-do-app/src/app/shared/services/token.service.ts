import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";
@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  signOut(): void {
    window.sessionStorage.removeItem(environment.auth.tokenName);
    window.sessionStorage.removeItem(environment.auth.username);
  }

  getToken(): string | null {
    return window.sessionStorage.getItem(environment.auth.tokenName);
  }

  setToken(value: any) {
    window.sessionStorage.removeItem(environment.auth.tokenName);
    window.sessionStorage.setItem(environment.auth.tokenName, value);
  }
}
