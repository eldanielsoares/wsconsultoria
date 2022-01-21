import { AddDocumentsComponent } from './add-documents/add-documents.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminSigninComponent } from './admin-signin/admin-signin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminSignupComponent } from './admin-signup/admin-signup.component';

const routes: Routes = [
  { path: 'admin-signin', component: AdminSigninComponent },
  { path: 'admin-signup', component: AdminSignupComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'add-documents', component: AddDocumentsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
