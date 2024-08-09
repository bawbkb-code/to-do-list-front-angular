import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';

const routes: Routes = [
  {
    path: "",
    component: UserComponent,
    children: [
      { path: "", redirectTo: "to-do-list", pathMatch: "full" },
      {
        path: "to-do-list",
        loadChildren: () =>
          import("./to-do-list/to-do-list.module").then(
            (m) => m.ToDoListModule
          ),
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
