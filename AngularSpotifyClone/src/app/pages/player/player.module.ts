import { BotaoMenuComponent } from './../../components/botaoMenu/botaoMenu.component';
import { PainelEsquerdoComponent } from './../../components/painelEsquerdo/painelEsquerdo.component';
import { PlayerRotas } from './player.routes';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PlayerRotas),
     FontAwesomeModule
  ],
  declarations: [
    PlayerComponent,
    PainelEsquerdoComponent,
    BotaoMenuComponent,

    ]
})
export class PlayerModule { }
