import { ListaMusicasComponent } from './../lista-musicas/lista-musicas.component';
import { PlayerCardComponent } from './../../components/player-card/player-card.component';
import { ArtistasItemImagemComponent } from './../../components/artistas-item-imagem/artistas-item-imagem.component';
import { TopArtistaComponent } from './../../components/top-artista/top-artista.component';
import { BuscasRecentesComponent } from './../../components/buscas-recentes/buscas-recentes.component';
import { PainelDireitoComponent } from './../../components/painel-direito/painel-direito.component';
import { TopArtistasComponent } from './../../components/top-artistas/top-artistas.component';
import { HomeComponent } from './../home/home.component';
import { FooterUserComponent } from './../../components/footerUser/footerUser.component';
import { BotaoMenuComponent } from './../../components/botaoMenu/botaoMenu.component';
import { PainelEsquerdoComponent } from './../../components/painelEsquerdo/painelEsquerdo.component';
import { PlayerRotas } from './player.routes';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PlayerRotas),
    FontAwesomeModule,
    FormsModule
  ],
  declarations: [
    PlayerComponent,
    PainelEsquerdoComponent,
    BotaoMenuComponent,
    FooterUserComponent,
    HomeComponent,
    TopArtistasComponent,
    PainelDireitoComponent,
    BuscasRecentesComponent,
    TopArtistaComponent,
    ArtistasItemImagemComponent,
    PlayerCardComponent,
    ListaMusicasComponent
    ]
})
export class PlayerModule { }
