import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetComponent } from './auth/forget/forget.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterLinkComponent } from './auth/register-link/register-link.component';
import { RegisterComponent } from './auth/register/register.component';

const routes: Routes = [
  {
    path: 'investor',
    loadChildren: () => import('./investors-end/investors-end.module').then(m => m.InvestorsEndModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin-end/admin-end.module').then(m => m.AdminEndModule)
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register/:link',
    component: RegisterLinkComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'forget',
    component: ForgetComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
