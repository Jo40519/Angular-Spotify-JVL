import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscas-recentes',
  templateUrl: './buscas-recentes.component.html',
  styleUrls: ['./buscas-recentes.component.scss']
})
export class BuscasRecentesComponent implements OnInit {

  campoPesquisa: string;

  pesquisasRecentes = [
    'Top Brasil',
    'Top Global',
    'Death Metal',
    'Opeth'
  ]
  constructor() { }

  ngOnInit(): void {
  }



  definirPesquisa(pesquisa: string) {
    this.campoPesquisa =pesquisa
  }
}
