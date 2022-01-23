import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './auth/signin/signin.component';
import { AngularFireAuthGuard, redirectLoggedInTo } from '@angular/fire/compat/auth-guard';
const redirectLoggedInToItems = () => redirectLoggedInTo(['home']);

const routes: Routes = [
  { path: 'signin', component: SigninComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectLoggedInToItems } },
  { path: 'home', loadChildren: () => import('./main/main-routing.module').then(main => main.MainRoutingModule) },
  { path: 'admin', loadChildren: () => import('./admin/admin-routing.module').then(admin => admin.AdminRoutingModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
