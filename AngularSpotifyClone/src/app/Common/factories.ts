import { IMusica } from './../interfaces/IMusica';
import { IArtistas } from './../interfaces/IArtistas';
export function newArtista(): IArtistas {
  return {
    id: '',
    imageUrl: '',
    name: '',
  }
}

export function newMusica(): IMusica {
  return {
    id: '',
    album: {
      id: '',
      imageUrl: '',
      name: ''
    },
    artists: [],
    time: '',
    title: ''
  }
}
