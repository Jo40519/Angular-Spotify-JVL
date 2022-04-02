import { Component, OnInit } from '@angular/core';
import { faGuitar, faHome, faMusic, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-painelEsquerdo',
  templateUrl: './painelEsquerdo.component.html',
  styleUrls: ['./painelEsquerdo.component.scss']
})
export class PainelEsquerdoComponent implements OnInit {



  // Icones
  homeIcon = faHome;
  searchIcon = faSearch;
  artistIcon = faGuitar;
  playlistIcon = faMusic


  constructor() { }

  ngOnInit() {
  }

}
