import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.dto';
import { NotifyService } from 'src/app/notifications/notify.service';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  user?: User
  editUser = this.fb.group({
    'name': ['', [Validators.required]],
  });
  loading = false;

  constructor(private fb: FormBuilder,
    private location: Location,
    private adminService: AdminService,
    private notify: NotifyService,
    private router: Router) {
    const nav = this.router.getCurrentNavigation()
    this.user = nav?.extras.state?.user;
    this.editUser.controls['name'].setValue(this.user?.name || '');
  }

  ngOnInit(): void {
  }

  goback() {
    this.location.back()
  }

  async handleEditUser() {
    try {
      this.loading = true;
      const userUpdate: User = {
        name: this.editUser.controls['name'].value
      }
      await this.adminService.UpdateUsers(this.user?.uid!, userUpdate);
      this.router.navigateByUrl('/admin/admin-dashboard')
      this.loading = false;

    } catch (err) {
      this.loading = false;
      this.notify.notifications('Algo deu errado, por favor tente novamente')
    }
  }

}
