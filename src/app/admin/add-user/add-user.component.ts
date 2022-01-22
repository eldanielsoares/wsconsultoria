import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  addUser = this.fb.group({
    'name': ['', [Validators.required]],
    'email': ['', [Validators.required, Validators.email]],
    'password': ['', [Validators.required, Validators.minLength(6)]],
  });
  hide = true;
  loading = false;
  constructor(private fb: FormBuilder,
    private routes: Router,
    private location: Location) { }

  ngOnInit(): void {
  }

  handleAddUser() {
    console.log('here');

  }

  goback() {
    this.location.back()
  }

}
