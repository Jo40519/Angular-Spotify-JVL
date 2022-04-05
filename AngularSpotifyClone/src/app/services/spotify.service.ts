import { async } from '@angular/core/testing';
import { IUsuario } from './../interfaces/IUsuario';
import { Injectable } from '@angular/core';
import { SpotifyConfiguration } from 'src/environments/environment';
import Spotify from 'spotify-web-api-js';
import { SpotifyPlaylistParaPlaylist, SpotifyUserParaUsuario } from '../Common/SpotifyHelper';
import { IPlaylist } from '../interfaces/IPlaylist';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {


  spotifyApi: Spotify.SpotifyWebApiJs = null;
  usuario: IUsuario;

  constructor() {
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
}
