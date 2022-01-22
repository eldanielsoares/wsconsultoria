import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  types = ['CPF', 'RG', 'Carteira de motorista'];
  documents = [
    { type: 'CPF' },
    { type: 'RG' },
    { type: 'Carteira de motorista' },
    { type: 'Certidão de nascimento' },
    { type: 'Cartão do sus' },
  ]
  constructor() { }

  ngOnInit(): void {
  }

  categoria(evt: any) {
    console.log(evt.value);

  }

}
