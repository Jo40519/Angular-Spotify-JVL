import { PlayerService } from './../../services/player.service';
import { newMusica } from 'src/app/Common/factories';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { IMusica } from 'src/app/interfaces/IMusica';
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


  constructor(private spotifyService: SpotifyService,
    private playerService: PlayerService) {

   }


  ngOnInit(): void {
    this.obterMusicaTocando();
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
}
