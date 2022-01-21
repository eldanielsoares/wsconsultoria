import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './auth/signin/signin.component';
import { redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { canActivate } from '@angular/fire/auth-guard';
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['/login']);

const routes: Routes = [
  { path: 'signin', component: SigninComponent },
  { path: 'home', loadChildren: () => import('./main/main-routing.module').then(main => main.MainRoutingModule) },
  { path: 'admin', loadChildren: () => import('./admin/admin-routing.module').then(admin => admin.AdminRoutingModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
