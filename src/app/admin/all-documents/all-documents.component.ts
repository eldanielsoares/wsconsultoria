import { AdminService } from './../services/admin.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { Documents } from 'src/app/interfaces/documents.dto';
import { User } from 'src/app/interfaces/user.dto';

@Component({
  selector: 'app-all-documents',
  templateUrl: './all-documents.component.html',
  styleUrls: ['./all-documents.component.css']
})
export class AllDocumentsComponent implements OnInit {
  user?: User
  types = ['CPF', 'RG', 'Carteira de motorista'];
  documents$?: Observable<Documents[]>;
  typeSelected = 'Todos';
  constructor(
    private router: Router,
    private location: Location,
    private adminService: AdminService
  ) {
    const nav = this.router.getCurrentNavigation()
    this.user = nav?.extras.state?.user;
  }

  ngOnInit(): void {
    this.documents$ = this.adminService.getDocs(this.user?.uid!);
  }

  categoria(evt: any) {
    this.typeSelected = evt.value;
    if (this.typeSelected === 'Todos') {
      this.documents$ = this.adminService.getDocs(this.user?.uid!);
    } else {
      this.documents$ = this.adminService.getDocsFilter(this.user?.uid!, this.typeSelected);
    }
  }

  goToEditDoc(docs: Documents) {
    this.router.navigateByUrl('/admin/edit-documents', { state: { docs } })
  }
  goToAddDoc() {
    this.router.navigateByUrl('/admin/add-documents', { state: { user: this.user } });
  }

  async handleDelete(docId: string) {
    try {
      await this.adminService.deleteDoc(docId);
    } catch (err) {
      console.log(err);

    }
  }

  goback() {
    this.location.back()
  }
}
