import { AuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private fb: FormBuilder, private authService: AuthService, private routes: Router) { }

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
      console.log(err);
      this.loading = false;
    }
  }

}
