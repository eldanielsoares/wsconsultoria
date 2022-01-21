import { MaterialModule } from './../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AdminRoutingModule } from './admin-routing.module';
import { AdminSigninComponent } from './admin-signin/admin-signin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminSignupComponent } from './admin-signup/admin-signup.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AddDocumentsComponent } from './add-documents/add-documents.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AllDocumentsComponent } from './all-documents/all-documents.component';
import { EditDocumentsComponent } from './edit-documents/edit-documents.component';

@NgModule({
  declarations: [
    AdminSigninComponent,
    AdminSignupComponent,
    AdminDashboardComponent,
    AddDocumentsComponent,
    AddUserComponent,
    AllDocumentsComponent,
    EditDocumentsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
