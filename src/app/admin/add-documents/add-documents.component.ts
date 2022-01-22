import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-documents',
  templateUrl: './add-documents.component.html',
  styleUrls: ['./add-documents.component.css']
})
export class AddDocumentsComponent implements OnInit {
  addDoc = this.fb.group({
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

  handleAddDoc() {

  }


}
