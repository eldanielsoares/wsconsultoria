import { AddUserComponent } from './add-user/add-user.component';
import { EditDocumentsComponent } from './edit-documents/edit-documents.component';
import { AllDocumentsComponent } from './all-documents/all-documents.component';
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
  { path: 'add-documents', component: AddDocumentsComponent },
  { path: 'all-documents', component: AllDocumentsComponent },
  { path: 'edit-documents', component: EditDocumentsComponent },
  { path: 'add-user', component: AddUserComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
