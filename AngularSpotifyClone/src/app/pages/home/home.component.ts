import { SpotifyService } from 'src/app/services/spotify.service';
import { IMusica } from '../../interfaces/IMusica';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  musicas: Array<IMusica> = []
  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
    this.obterMusicas();
  }

  async obterMusicas() {
      this.musicas = await this.spotifyService.buscarMusicas()
  }


  obterArtistas(musica: IMusica) {
    return musica.artists.map(artistas => artistas.name).join(', ')
  }
}
