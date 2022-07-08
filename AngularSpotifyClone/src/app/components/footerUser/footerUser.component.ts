import { IUsuario } from './../../interfaces/IUsuario';
import { SpotifyService } from '../../core/services/spotify.service';
import { Component, OnInit } from '@angular/core';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footerUser',
  templateUrl: './footerUser.component.html',
  styleUrls: ['./footerUser.component.scss']
})
export class FooterUserComponent implements OnInit {


  public logOutIcon = faSignOutAlt;
  public usuario: IUsuario
  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
    this.usuario = this.spotifyService.usuario
  }

  logOut() {
    this.spotifyService.logOut();
}

}
