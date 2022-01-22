import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-all-documents',
  templateUrl: './all-documents.component.html',
  styleUrls: ['./all-documents.component.css']
})
export class AllDocumentsComponent implements OnInit {

  types = ['CPF', 'RG', 'Carteira de motorista'];
  documents = [
    { type: 'CPF' },
    { type: 'RG' },
    { type: 'Carteira de motorista' },
    { type: 'Certidão de nascimento' },
    { type: 'Cartão do sus' },
  ]
  constructor(private router: Router, private location: Location) { }

  ngOnInit(): void {
  }

  categoria(evt: any) {
    console.log(evt.value);
  }

  goToEditDoc() {
    this.router.navigateByUrl('/admin/edit-documents')
  }
  goToAddDoc() {
    this.router.navigateByUrl('/admin/add-documents')
  }

  goback() {
    this.location.back()
  }
}
