import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/service/auth.service';
import { NotifyService } from 'src/app/notifications/notify.service';

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

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private routes: Router,
    private notify: NotifyService) { }

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
      this.notify.notifications('Algo deu errado, verifique seus dados e tente novamente');
      this.loading = false;
    }
  }

  goToSignUp() {
    this.routes.navigateByUrl('/admin/admin-signup');
  }
}
