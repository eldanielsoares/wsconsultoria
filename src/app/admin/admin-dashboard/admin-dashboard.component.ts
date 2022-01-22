import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserAdmin } from 'src/app/interfaces/user.dto';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  users$?: Observable<UserAdmin[]>;

  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.users$ = this.adminService.getUsers();
  }

  goToAddDocuments() {
    this.router.navigateByUrl('/admin/all-documents')
  }

  goToAddUser() {
    this.router.navigateByUrl('/admin/add-user')
  }

}
