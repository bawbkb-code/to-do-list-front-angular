import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToDoListRoutingModule } from './to-do-list-routing.module';
import { FilterComponent } from './filter/filter.component';
import { TableListComponent } from './table-list/table-list.component';
import { FormComponent } from './form/form.component';
import { ToDoListComponent } from './to-do-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  declarations: [ToDoListComponent,FilterComponent, TableListComponent, FormComponent],
  imports: [CommonModule, ToDoListRoutingModule,FormsModule,
    ReactiveFormsModule,BsDatepickerModule]
})
export class ToDoListModule {}
