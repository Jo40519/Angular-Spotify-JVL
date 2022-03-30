import { Injectable } from '@angular/core';
import { SpotifyConfiguration } from 'src/environments/environment';
import Spotify from 'spotify-web-api-js';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {


  spotifyApi: Spotify.SpotifyWebApiJs = null;


  constructor() {
    this.spotifyApi = new Spotify();
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
}
