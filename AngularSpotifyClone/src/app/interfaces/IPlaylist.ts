import { IMusica } from './IMusica';
export interface IPlaylist {
  id?: string,
  name?: string,
  imagemUrl?: string
  music?: IMusica[]
}
