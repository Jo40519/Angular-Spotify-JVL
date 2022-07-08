import { IArtistas } from './../../interfaces/IArtistas';
import { SpotifyService } from 'src/app/core/services/spotify.service';
import { Component, OnInit } from '@angular/core';
import { newArtista } from 'src/app/Common/factories';

@Component({
  selector: 'app-top-artistas',
  templateUrl: './top-artistas.component.html',
  styleUrls: ['./top-artistas.component.scss']
})
export class TopArtistasComponent implements OnInit {

  topArtistas: IArtistas = newArtista();
  constructor(private spotifyService: SpotifyService) { }

  ngOnInit(): void {
    this.buscarArtsita();
  }

  async buscarArtsita() {
    let artistas = await this.spotifyService.obterTopArtistas(1)
    if (artistas) {
      this.topArtistas = artistas.pop()
    }

  }
}
