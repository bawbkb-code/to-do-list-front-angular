import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenService } from './token.service';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient, private tokenService: TokenService) {}

  get endpoint(): string {
    return environment.endpoint.api;
  }

  post(url: string, model: any): any {
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.tokenService.getToken(),
    });
    return this.http.post(environment.endpoint.api + url, model, {
      headers: headers,
    });
  }

  patch(url: string, id: string, model: any): any {
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.tokenService.getToken(),
    });
    return this.http.patch(environment.endpoint.api + url + '/' + id, model, {
      headers: headers,
    });
  }

  login(url: string, model: any): any {
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    });
    return this.http.post(environment.endpoint.api + url, model, {
      headers: headers,
    });
  }

  get(url: string): any {
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.tokenService.getToken(),
    });
    return this.http.get(environment.endpoint.api + url, { headers: headers });
  }

  delete(url: string): any {
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.tokenService.getToken(),
    });
    return this.http.delete(environment.endpoint.api + url, {
      headers: headers,
    });
  }
}
