import { AdminService } from './../services/admin.service';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AngularFireFunctions } from '@angular/fire/compat/functions';
import { User } from 'src/app/interfaces/user.dto';
import { NotifyService } from 'src/app/notifications/notify.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  addUser = this.fb.group({
    'name': ['', [Validators.required]],
    'username': ['', [Validators.required]],
    'password': ['', [Validators.required, Validators.minLength(6)]],
  });
  hide = true;
  loading = false;
  constructor(private fb: FormBuilder,
    private routes: Router,
    private fns: AngularFireFunctions,
    private location: Location,
    private adminService: AdminService,
    private notify: NotifyService) { }

  ngOnInit(): void {
  }

  async handleAddUser() {
    const name = this.addUser.controls['name'].value;
    const username = this.addUser.controls['username'].value;
    const password = this.addUser.controls['password'].value;
    const data = {
      email: `${username}@email.com`.toLocaleLowerCase(),
      displayName: name,
      password: password
    }

    const callable = this.fns.httpsCallable('createUser');
    const res = callable(data).subscribe((result) => {
      const dataUser: User = {
        name: name,
        uid: result
      }
      this.adminService.createUsers(result, dataUser).then(() => {
        this.location.back();
      }).catch((err) => {
        this.notify.notifications('Algo deu errado, tente novamente mais tarde');
      })
    }, err => {
      console.log(err);
    })

  }

  goback() {
    this.location.back()
  }

}
