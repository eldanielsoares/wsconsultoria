import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit-documents',
  templateUrl: './edit-documents.component.html',
  styleUrls: ['./edit-documents.component.css']
})
export class EditDocumentsComponent implements OnInit {

  editDoc = this.fb.group({
    'type': ['', [Validators.required]],
  })
  types = ['CPF', 'RG', 'Carteira de motorista'];
  loading = false;
  constructor(private location: Location, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  goback() {
    this.location.back()
  }

  handleEditDoc() {

  }

}
