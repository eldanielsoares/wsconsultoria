import { AdminService } from './../services/admin.service';
import { Documents } from './../../interfaces/documents.dto';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import * as uuid from 'uuid';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-edit-documents',
  templateUrl: './edit-documents.component.html',
  styleUrls: ['./edit-documents.component.css']
})
export class EditDocumentsComponent implements OnInit {
  nameFile?= ''
  uploadedDoc?: Blob
  docs?: Documents
  editDoc = this.fb.group({
    'type': ['', [Validators.required]],
  })
  types = ['CPF', 'RG', 'Carteira de motorista'];
  loading = false;
  constructor(
    private location: Location,
    private fb: FormBuilder,
    private router: Router,
    private adminService: AdminService,
    private storage: AngularFireStorage) {
    const nav = this.router.getCurrentNavigation()
    this.docs = nav?.extras.state?.docs;
    this.editDoc.controls['type'].setValue(this.docs?.type);
  }

  ngOnInit(): void {
  }

  goback() {
    this.location.back()
  }

  getFile(evt: any) {
    this.nameFile = evt.target.files[0].name;
    this.uploadedDoc = evt.target.files[0];
    console.log(this.nameFile);

  }

  async handleUpdateNoFile() {
    try {
      const doc: Documents = {
        docId: this.docs?.docId!,
        type: this.editDoc.controls['type'].value,
      }
      await this.adminService.updateDocs(doc, this.docs?.docId!);
      this.location.back();
      this.loading = false;
    } catch (err) {

    }
  }
  async handleUpdateFile() {
    try {
      this.loading = true;
      const path = `docs/${this.docs?.docId}.pdf`
      await this.storage.ref(path).put(this.uploadedDoc)
      this.storage.ref(path).getDownloadURL().subscribe((urlDoc) => {
        const doc: Documents = {
          type: this.editDoc.controls['type'].value,
          url: urlDoc,
          docName: this.nameFile!
        }
        this.adminService.updateDocs(doc, this.docs?.docId!);
        this.location.back();
        this.loading = false;
      });
    } catch (err) {
      console.log(err);

    }
  }

  handleEditDoc() {
    if (!this.uploadedDoc) {
      this.handleUpdateNoFile();
    } else {
      this.handleUpdateFile()
    }
  }

}
