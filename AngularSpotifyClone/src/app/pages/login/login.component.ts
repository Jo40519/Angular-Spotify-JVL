import { Route, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/core/services/spotify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private spotifyService: SpotifyService,
    private router: Router) { }

  ngOnInit() {
    this.verificarTokenCallbackUrl();
  }

  verificarTokenCallbackUrl() {
    const token = this.spotifyService.obterTokenUrlCallback();
    if (token) {
      this.spotifyService.definirAccessToken(token);
      this.router.navigate(['/player/home'])
    }
  }

  abrirPaginaLogin() {
    window.location.href =  this.spotifyService.obterUrlLogin()
  }
}
