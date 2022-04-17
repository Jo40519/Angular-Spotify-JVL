import { PlayerService } from './../../services/player.service';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { newMusica } from 'src/app/Common/factories';
import { IMusica } from './../../interfaces/IMusica';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-musicas',
  templateUrl: './lista-musicas.component.html',
  styleUrls: ['./lista-musicas.component.scss']
})
export class ListaMusicasComponent implements OnInit {

  constructor(private playerService: PlayerService) { }
  bannerImagemUrl = ''
  bannerTexto = ''

  musica: Array<IMusica> = []
  musicaAtual: IMusica = newMusica();
  playIcon = faPlay



  ngOnInit(): void {
  }

    obterMusicas() {

}


}
