import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../shared/services/api.service';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { TokenService } from '../shared/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form!: UntypedFormGroup;
  model:any ={};
  constructor(private router: Router,private apiService:ApiService,private formBuilder: UntypedFormBuilder,private tokenService:TokenService){
  }

  ngOnInit(){
    this.buildForm();
  }

  buildForm(): void {
    this.form = this.formBuilder.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  login(): void {
    if (this.form.valid) {
      this.apiService.login("auth/login", this.model).subscribe((response: any) => {
        this.tokenService.setToken(response.access_token);
        this.router.navigate(["/user"]);
      }, (err: any) => {
        console.log(err);
      });
    }else{
      this.form.markAllAsTouched();
      window.alert("Please fill in all required fields");
    }
  }

  registerPage(){
    this.router.navigate(["/register"]);
  }
}
