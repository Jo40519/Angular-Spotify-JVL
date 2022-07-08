import { SpotifyService } from 'src/app/core/services/spotify.service';
import { IMusica } from '../../interfaces/IMusica';
import { Injectable } from '@angular/core';
import { newMusica } from '../../Common/factories';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {


  musicaAtual = new BehaviorSubject<IMusica>(newMusica())
  musicaPausada = new BehaviorSubject<IMusica>(newMusica())

  timerId: any = null;
  constructor(private spotifyService: SpotifyService) {
    this.obterMusicaAtual();
   }

  async obterMusicaAtual() {
    clearTimeout(this.timerId);
    const musica = await this.spotifyService.obterMusicaAtual();
    this.definirMusicaAtual(musica);
    this.timerId = setInterval(async() => {
      await this.obterMusicaAtual()
    },3000)
  }


  definirMusicaAtual(musica: IMusica) {
    this.musicaAtual.next(musica)
  }



  async voltarMusica() {
    await this.spotifyService.voltarMusica();
  }


  async proximaMusica() {
    await this.spotifyService.proximaMusica();
  }


  async pausarMusica(a?:string) {
    this.spotifyService.pausarMusica();
  }


  async tocarMusica(a?:string) {
    await this.spotifyService.tocarMusica()
  }
}
