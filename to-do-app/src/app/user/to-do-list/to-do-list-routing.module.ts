import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoListComponent } from './to-do-list.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {
    path: "",
    component: ToDoListComponent
  },
  {
    path: "new",
    data: { breadcrumbs: "New Todo" },
    component: FormComponent
  },
  {
    path: "edit/:id",
    data: { breadcrumbs: "Edit Todo" },
    component: FormComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToDoListRoutingModule { }
