import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthInjectComponent } from './auth-inject/auth-inject.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [ { path: '', component: AuthInjectComponent },
  { path: 'logout', component: LogoutComponent },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./register/register.module').then((m) => m.RegisterModule),
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
    canActivate: [AuthGuard]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
