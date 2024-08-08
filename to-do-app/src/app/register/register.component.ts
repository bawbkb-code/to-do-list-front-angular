import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../shared/services/api.service';
import { TokenService } from '../shared/services/token.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
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

  register(): void {
    this.apiService.login("users", this.model).subscribe((response: any) => {
      if(response.isSuccess){
        window.alert("Register Success");
        this.router.navigate(["/login"]);
      }else{
        window.alert("Register Failed");
      }
      
    }, (err: any) => {
      window.alert("Register Failed");
      console.log(err);
    });
  }

  
}
