import { ListaMusicasComponent } from './../lista-musicas/lista-musicas.component';
import { HomeComponent } from './../home/home.component';
import { PlayerComponent } from './player.component';
import { Routes } from '@angular/router';
export const PlayerRotas : Routes = [
  {
    path: '',
    component: PlayerComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'lista/:id',
        component: ListaMusicasComponent
      }
    ]
  },
]
