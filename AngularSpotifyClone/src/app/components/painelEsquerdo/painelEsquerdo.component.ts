import { Component, OnInit } from '@angular/core';
import { faGuitar,  faMusic, faSearch, faHome } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
@Component({
  selector: 'app-painelEsquerdo',
  templateUrl: './painelEsquerdo.component.html',
  styleUrls: ['./painelEsquerdo.component.scss']
})
export class PainelEsquerdoComponent implements OnInit {

  menuSelecionado = 'Home'


  // Icones
  homeIcon = faHome;
  searchIcon = faSearch;
  artistIcon = faGuitar;
  playlistIcon = faMusic



  constructor() { }

  ngOnInit() {
  }


  botaoClick(botao: string) {
    this.menuSelecionado = botao
  }
}
