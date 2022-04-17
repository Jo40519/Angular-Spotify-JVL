import { IMusica } from './../../interfaces/IMusica';
import { PlayerService } from './../../services/player.service';
import { newMusica } from 'src/app/Common/factories';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { Subscription } from 'rxjs';
import { faStepBackward, faStepForward, faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss']
})
export class PlayerCardComponent implements OnInit, OnDestroy {

  // icone
  anteriorIcon = faStepBackward;
  playIcon = faPlay
  pauseIcon = faPause
  proximoIcon = faStepForward;

  musica: IMusica = newMusica();
  musicaAtual: IMusica = newMusica();
  subs: Array<Subscription> = [];
  musicaP: boolean

  constructor(private spotifyService: SpotifyService,
    private playerService: PlayerService) {

   }


  ngOnInit(): void {
    this.obterMusicaTocando();
    this.obterMusicaPausada();
  }




  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe())
  }

  async voltarMusica() {
    await this.playerService.voltarMusica();
  }


  async proximaMusica() {
    await this.playerService.proximaMusica();
  }



  async pausarMusica() {
    await this.playerService.pausarMusica();
  }


  async tocarMusica() {
    await this.playerService.tocarMusica();
  }


  obterMusicaTocando() {
    const sub = this.playerService.musicaAtual.subscribe((musica: IMusica) => {
      this.musica = musica
    })

    this.subs.push(sub)
  }

  obterMusicaPausada() {
    const sub = this.playerService.musicaPausada.subscribe((musicaP: IMusica) => {
      this.musicaAtual = musicaP
    })
    this.subs.push(sub)
  }


}
