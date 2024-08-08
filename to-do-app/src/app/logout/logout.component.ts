import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../shared/services/token.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent {
  constructor(private router: Router, private tokenService: TokenService) {}
  
  ngOnInit(): void {
    this.tokenService.signOut();
    this.router.navigate(['/login']);
  }
}
