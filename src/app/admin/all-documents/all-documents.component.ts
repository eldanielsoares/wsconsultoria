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
    console.log(evt.value);
  }

  goToEditDoc() {
    this.router.navigateByUrl('/admin/edit-documents')
  }
  goToAddDoc() {
    this.router.navigateByUrl('/admin/add-documents', { state: { user: this.user } });
  }

  goback() {
    this.location.back()
  }
}
