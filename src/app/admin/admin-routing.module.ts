import { AddUserComponent } from './add-user/add-user.component';
import { EditDocumentsComponent } from './edit-documents/edit-documents.component';
import { AllDocumentsComponent } from './all-documents/all-documents.component';
import { AddDocumentsComponent } from './add-documents/add-documents.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminSigninComponent } from './admin-signin/admin-signin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminSignupComponent } from './admin-signup/admin-signup.component';
import { AngularFireAuthGuard, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/compat/auth-guard';
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['admin/admin-signin']);
const redirectLoggedInToItems = () => redirectLoggedInTo(['admin/admin-dashboard']);

const routes: Routes = [
  { path: 'admin-signin', component: AdminSigninComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectLoggedInToItems } },
  { path: 'admin-signup', component: AdminSignupComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectLoggedInToItems } },
  { path: 'admin-dashboard', component: AdminDashboardComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin } },
  { path: 'add-documents', component: AddDocumentsComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin } },
  { path: 'all-documents', component: AllDocumentsComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin } },
  { path: 'edit-documents', component: EditDocumentsComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin } },
  { path: 'add-user', component: AddUserComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
