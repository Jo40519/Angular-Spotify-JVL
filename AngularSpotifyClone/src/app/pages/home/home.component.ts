import { PlayerService } from './../../services/player.service';
import { SpotifyService } from 'src/app/services/spotify.service';
import { IMusica } from '../../interfaces/IMusica';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { faCompactDisc, faHeartMusicCameraBolt, faPlay, faWaveSquare } from '@fortawesome/free-solid-svg-icons';
import { newMusica } from 'src/app/Common/factories';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {


  musicas: Array<IMusica> = []
  musicaAtual: IMusica = newMusica();
  subs: Array<Subscription> = []

  // icone play
  playIcon = faPlay
  playingIcon = faCompactDisc
  constructor(private spotifyService: SpotifyService, private playerService: PlayerService) { }




  ngOnInit() {
    this.obterMusicas();
    this.obterMusicaAtual();
  }


  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe())
  }


  async obterMusicas() {
      this.musicas = await this.spotifyService.buscarMusicas()
  }

  obterMusicaAtual() {
    const sub = this.playerService.musicaAtual.subscribe(musica => {
      this.musicaAtual = musica
    })
    this.subs.push(sub)

  }


  obterArtistas(musica: IMusica) {
    return musica.artists.map(artistas => artistas.name).join(', ')
  }


  async executarMusica(musica: IMusica) {
    await this.spotifyService.executarMusica(musica.id);
    this.playerService.definirMusicaAtual(musica)
  }
}
