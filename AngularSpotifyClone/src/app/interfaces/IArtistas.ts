import { IMusica } from './IMusica';
export interface IArtistas {

  id?: string;
  name?: string;
  imageUrl?: string;
  music?:  IMusica[]
}
