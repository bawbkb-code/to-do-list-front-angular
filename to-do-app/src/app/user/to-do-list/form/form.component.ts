import { Component } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  form!: UntypedFormGroup;
  model: any = {};
  sub: any;
  id: any;
  constructor(
    private apiService: ApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: UntypedFormBuilder
  ) {}

  ngOnInit() {
    this.sub = this.activatedRoute.paramMap.subscribe((params: any) => {
      this.id = params.get('id');
      if (this.id) {
        this.searchId();
      }
    });
  }

  searchId() {
    this.apiService.get('todo/' + this.id).subscribe((response: any) => {
      this.model = response.data;
      console.log(this.model);
    });
  }

  create() {
    this.apiService.post('todo', this.model).subscribe((response: any) => {
      if (response.isSuccess) {
        window.alert("Create Success");
        this.router.navigate(["./"], {
          relativeTo: this.activatedRoute.parent,
        });
      }
    });
  }

  update() {
    this.apiService.patch('todo',this.id, this.model).subscribe((response: any) => {
      if (response.isSuccess) {
        window.alert("Update Success");
        this.router.navigate(["./"], {
          relativeTo: this.activatedRoute.parent,
        });
      }
    });
  }

  save(): void {
    if (!this.id) {
      this.create();
    } else {
      this.update();
    }
  }
}
