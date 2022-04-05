import { Component, OnInit } from '@angular/core';
import { faGuitar,  faMusic, faSearch, faHome } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { IPlaylist } from 'src/app/interfaces/IPlaylist';
import { SpotifyService } from 'src/app/services/spotify.service';
@Component({
  selector: 'app-painelEsquerdo',
  templateUrl: './painelEsquerdo.component.html',
  styleUrls: ['./painelEsquerdo.component.scss']
})
export class PainelEsquerdoComponent implements OnInit {

  menuSelecionado = 'Home'

  arrayPlaylist: Array<IPlaylist> = []

  // Icones
  homeIcon = faHome;
  searchIcon = faSearch;
  artistIcon = faGuitar;
  playlistIcon = faMusic



  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
    this.buscarPlaylist();
  }


  botaoClick(botao: string) {
    this.menuSelecionado = botao
  }

  async buscarPlaylist() {
    this.arrayPlaylist = await this.spotifyService.buscarPlaylistsUsuario();
  }
}
