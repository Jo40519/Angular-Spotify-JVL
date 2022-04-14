import { SpotifyService } from './../../services/spotify.service';
import { Component, OnInit } from '@angular/core';
import { IArtistas } from 'src/app/interfaces/IArtistas';

@Component({
  selector: 'app-top-artista',
  templateUrl: './top-artista.component.html',
  styleUrls: ['./top-artista.component.scss']
})
export class TopArtistaComponent implements OnInit {

  artistas: Array<IArtistas> = []

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit(): void {
    this.buscarTopArtistas();
  }


  async buscarTopArtistas() {
    this.artistas = await this.spotifyService.obterTopArtistas(5)
    console.log(this.artistas)
}
}
