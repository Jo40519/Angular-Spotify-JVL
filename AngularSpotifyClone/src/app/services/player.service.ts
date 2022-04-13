import { SpotifyService } from 'src/app/services/spotify.service';
import { IMusica } from './../interfaces/IMusica';
import { Injectable } from '@angular/core';
import { newMusica } from '../Common/factories';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {


  musicaAtual = new BehaviorSubject<IMusica>(newMusica())
  constructor(private spotifyService: SpotifyService) {
    this.obterMusicaAtual();
   }

  async obterMusicaAtual() {
    const musica = await this.spotifyService.obterMusicaAtual();
    this.musicaAtual.next(musica)
  }


  definirMusicaAtual(musica: IMusica) {
    this.musicaAtual.next(musica)
  }
}
