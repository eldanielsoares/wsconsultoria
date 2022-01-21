import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminSigninComponent } from './admin-signin/admin-signin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'admin-signin', component: AdminSigninComponent },
  { path: 'admin-dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
