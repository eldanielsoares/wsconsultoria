import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/service/auth.service';

@Component({
  selector: 'app-admin-signin',
  templateUrl: './admin-signin.component.html',
  styleUrls: ['./admin-signin.component.css']
})
export class AdminSigninComponent implements OnInit {
  signin = this.fb.group({
    'email': ['', [Validators.required, Validators.email]],
    'password': ['', [Validators.required, Validators.minLength(6)]],
  });
  hide = true;
  loading = false;

  constructor(private fb: FormBuilder, private authService: AuthService, private routes: Router) { }

  ngOnInit(): void {
  }

  async handleSignIn() {
    try {
      this.loading = true;
      const email = this.signin.controls['email'].value;
      const password = this.signin.controls['password'].value;
      const data = await this.authService.loginService(email, password);
      this.loading = false;
      this.routes.navigateByUrl('/admin/admin-dashboard', { replaceUrl: true });


    } catch (err) {
      console.log(err);
      this.loading = false;
    }
  }
}
