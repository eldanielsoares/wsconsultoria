import { AdminService } from './../services/admin.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import * as uuid from 'uuid';
import { Documents } from 'src/app/interfaces/documents.dto';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { NotifyService } from 'src/app/notifications/notify.service';
@Component({
  selector: 'app-add-documents',
  templateUrl: './add-documents.component.html',
  styleUrls: ['./add-documents.component.css']
})
export class AddDocumentsComponent implements OnInit {
  nameFile?: string
  user?: any
  uploadedDoc?: Blob
  addDoc = this.fb.group({
    'type': ['', [Validators.required]],
  })
  types = ['CPF', 'RG', 'Carteira de motorista'];
  loading = false;
  constructor(
    private location: Location,
    private fb: FormBuilder,
    private router: Router,
    private storage: AngularFireStorage,
    private adminService: AdminService,
    private notify: NotifyService
  ) {
    const nav = this.router.getCurrentNavigation()
    this.user = nav?.extras.state?.user;
  }

  ngOnInit(): void {
  }

  goback() {
    this.location.back()
  }


  getFile(evt: any) {
    this.nameFile = evt.target.files[0].name;
    this.uploadedDoc = evt.target.files[0];
  }

  async handleAddDoc() {
    try {
      this.loading = true;
      const docId = uuid.v4();
      const path = `docs/${docId}.pdf`
      await this.storage.ref(path).put(this.uploadedDoc)
      this.storage.ref(path).getDownloadURL().subscribe((urlDoc) => {
        const doc: Documents = {
          docId,
          type: this.addDoc.controls['type'].value,
          uid: this.user.uid,
          url: urlDoc,
          docName: this.nameFile!
        }
        this.adminService.addDocs(doc, docId);
        this.location.back();
        this.loading = false;
      });
    } catch (err) {
      this.notify.notifications(err as string);
      this.loading = false;
    }
  }


}
