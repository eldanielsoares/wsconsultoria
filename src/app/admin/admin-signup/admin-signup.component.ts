import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/service/auth.service';
import { UserAdmin } from 'src/app/interfaces/user.dto';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin-signup',
  templateUrl: './admin-signup.component.html',
  styleUrls: ['./admin-signup.component.css']
})
export class AdminSignupComponent implements OnInit {
  signup = this.fb.group({
    'name': ['', [Validators.required]],
    'email': ['', [Validators.required, Validators.email]],
    'password': ['', [Validators.required, Validators.minLength(6)]],
  });
  hide = true;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private adminService: AdminService,
    private routes: Router) { }

  ngOnInit(): void {
  }

  async handleCreateAdmin(uid: string, user: UserAdmin) {
    try {
      await this.adminService.createAdmin(uid, user);
      this.routes.navigateByUrl('/admin/admin-dashboard', { replaceUrl: true });
    } catch (err) {
      console.log(err);

    }
  }

  async handleSignup() {
    try {
      this.loading = true;
      const email = this.signup.controls['email'].value;
      const password = this.signup.controls['password'].value;
      const data = await this.authService.signupService(email, password);
      this.loading = false;
      const user: UserAdmin = {
        admin: true,
        uid: data.user?.uid,
        name: this.signup.controls['name'].value
      }

      this.handleCreateAdmin(data.user?.uid!, user);

    } catch (err) {
      console.log(err);
      this.loading = false;
    }
  }
}
