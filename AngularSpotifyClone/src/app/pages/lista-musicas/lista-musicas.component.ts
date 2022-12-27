import { SpotifyService } from 'src/app/core/services/spotify.service';
import { PlayerService } from '../../core/services/player.service';
import { faPlay, faCompactDisc } from '@fortawesome/free-solid-svg-icons';
import { newMusica } from 'src/app/Common/factories';
import { IMusica } from './../../interfaces/IMusica';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lista-musicas',
  templateUrl: './lista-musicas.component.html',
  styleUrls: ['./lista-musicas.component.scss']
})
export class ListaMusicasComponent implements OnInit, OnDestroy {



  bannerImagemUrl = '';
  bannerTexto = '';


  subs: Array<Subscription> = []

  musica: Array<IMusica> = []
  musicaAtual: IMusica = newMusica();
  playIcon = faPlay
  playingIcon = faCompactDisc


  title =''

  constructor(private playerService: PlayerService, private activedRoute: ActivatedRoute, private spotifyService: SpotifyService) { }


  ngOnInit(): void {
    this.obterMusicas();
    this.obterMusicaAtual()
  }

   ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe())
  }




  obterMusicaAtual() {
    const sub = this.playerService.musicaAtual.subscribe(musica => {
      this.musicaAtual = musica
    })

    this.subs.push(sub)
    console.log('subs aqui:', this.subs)
  }

    obterMusicas() {
      const sub =  this.activedRoute.paramMap.subscribe(async params => {
        const tipo = params.get('tipo')
        const id = params.get('id')
        await this.obterDadosPagina(tipo, id)
      })

      this.subs.push(sub)

    }


  async obterDadosPagina(tipo:string, id: string) {
    if (tipo == 'playlist') {
      await this.obterDadosPlaylist(id)
    } else {
      await this.obterDadosArtistas(id)
    }
  }


  async obterDadosPlaylist(playlistId: string) {
    const playlistMusicas = await this.spotifyService.buscarMuiscasPlaylist(playlistId);
    this.definirDadosPagina(playlistMusicas.name, playlistMusicas.imagemUrl, playlistMusicas.music);
    this.title = `Múscias Playlist: ${playlistMusicas.name}`
  }


  async obterDadosArtistas(artistaId: string) {

  }


  definirDadosPagina(bannerTexto: string, bannerImage: string, musicas: IMusica[]) {
    this.bannerImagemUrl = bannerImage;
    this.bannerTexto = bannerTexto;
    this.musica = musicas
  }


   async executarMusica(musica: IMusica) {
    await this.spotifyService.executarMusica(musica.id);
    this.playerService.definirMusicaAtual(musica)
  }

   obterArtistas(musica: IMusica) {
    return musica.artists.map(artistas => artistas.name).join(', ')
  }
}
