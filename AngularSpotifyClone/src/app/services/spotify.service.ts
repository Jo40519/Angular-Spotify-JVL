import { IMusica } from '../interfaces/IMusica';
import { IArtistas } from './../interfaces/IArtistas';
import { Router } from '@angular/router';
import { async } from '@angular/core/testing';
import { IUsuario } from './../interfaces/IUsuario';
import { Injectable } from '@angular/core';
import { SpotifyConfiguration } from 'src/environments/environment';
import Spotify from 'spotify-web-api-js';
import { SpotifyArtistaParaArtista, SpotifyPlaylistParaPlaylist, SpotifyTrackParaMusica, SpotifyUserParaUsuario } from '../Common/SpotifyHelper';
import { IPlaylist } from '../interfaces/IPlaylist';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {


  spotifyApi: Spotify.SpotifyWebApiJs = null;
  usuario: IUsuario;
  artistas: IArtistas

  constructor(private router: Router) {
    this.spotifyApi = new Spotify();
 }


  async inicializarUsuario() {
    if (this.usuario)
      return true;

    const token = localStorage.getItem('token')
    if (!token)
      return false;

    try {
      this.definirAccessToken(token)
      await this.obterSpotifyUsuario();
      return this.usuario


    } catch (ex) {
      return false
    }
  }

   async obterSpotifyUsuario() {
     const userInfo = await this.spotifyApi.getMe();
      this.usuario = SpotifyUserParaUsuario(userInfo)

  }

  obterUrlLogin() {
    const authEndpoint = `${SpotifyConfiguration.authEndipoin}?`;
    const clientId = `client_id=${SpotifyConfiguration.clientId}&`;
    const redirectUrl = `redirect_uri=${SpotifyConfiguration.redirectUrl}&`;
    const scopes = `scope=${SpotifyConfiguration.scopes.join('%20')}&`;
    const response = `response_type=token&show_dialog=true`;
    return authEndpoint + clientId + redirectUrl + scopes + response;
  }


  obterTokenUrlCallback() {
    if (!window.location.hash)
      return '';

    const params = window.location.hash.substring(1).split('&')
    console.log(params)

    return params[0].split('=')[1]
  }


  definirAccessToken(token: string) {
    this.spotifyApi.setAccessToken(token);
    localStorage.setItem('token', token);
  }

  async buscarPlaylistsUsuario(offset = 0, limit = 50): Promise<IPlaylist[]> {
    const playlists = await this.spotifyApi.getUserPlaylists(this.usuario.id, { offset, limit });
    return playlists.items.map(SpotifyPlaylistParaPlaylist);
  }

  async buscarMuiscasPlaylist(playlistId: string, offset = 0, limit = 50) {
    const plyalistSpotify = await this.spotifyApi.getPlaylist(playlistId)

    if (!playlistId) {

    }
  }

    async obterTopArtistas(limit = 10): Promise<IArtistas[]> {
      const artistas = await this.spotifyApi.getMyTopArtists({ limit });
      return artistas.items.map(SpotifyArtistaParaArtista)
    }


  async buscarMusicas(offset = 0, limit = 50): Promise<IMusica[]> {
    const music = await this.spotifyApi.getMySavedTracks({ offset, limit });
    return music.items.map(x => SpotifyTrackParaMusica(x.track))
  }


  async executarMusica(musicaid: string) {
    await this.spotifyApi.queue(musicaid);
    await this.spotifyApi.skipToNext()
  }

  async obterMusicaAtual(): Promise<IMusica> {
    const musicaAtual = await this.spotifyApi.getMyCurrentPlayingTrack();
    return SpotifyTrackParaMusica(musicaAtual.item)
  }


  async voltarMusica() {
    await this.spotifyApi.skipToPrevious();
  }

  async proximaMusica() {
    await this.spotifyApi.skipToNext();
  }

  async pausarMusica() {
    await this.spotifyApi.pause();
  }

  async tocarMusica() {
    await this.spotifyApi.play()
  }




  logOut() {
    localStorage.clear();
    this.router.navigate(['/login'])
  }


}
