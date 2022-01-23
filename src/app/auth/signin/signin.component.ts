import { AuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotifyService } from 'src/app/notifications/notify.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signin = this.fb.group({
    'email': ['', [Validators.required]],
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
      const data = await this.authService.loginService(`${email}@email.com`, password);
      this.loading = false;
      this.routes.navigateByUrl('/home', { replaceUrl: true });


    } catch (err) {
      this.notify.notifications('Algo deu errado, verifique seus dados e tente novamente');
      this.loading = false;
    }
  }

}
