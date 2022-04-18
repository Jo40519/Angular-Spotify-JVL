import { PlayerService } from './../../services/player.service';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
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


  constructor(private playerService: PlayerService, private activedRoute: ActivatedRoute) { }


  ngOnInit(): void {
  }

   ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe())
  }

    obterMusicas() {
      const sub =  this.activedRoute.paramMap.subscribe(async params => {
        const tipo = params.get('tipo')
        const id = params.get('id')
      })

      this.subs.push(sub)
    }


  async obterDadosPagina(tipo:string, id: string) {

  }


}
