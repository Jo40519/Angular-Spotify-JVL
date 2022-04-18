import { IPlaylist } from 'src/app/interfaces/IPlaylist';
import { IMusica } from './../interfaces/IMusica';
import { IArtistas } from './../interfaces/IArtistas';
export function newArtista(): IArtistas {
  return {
    id: '',
    imageUrl: '',
    name: '',
    music: []
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

export function newPlaylist(): IPlaylist {
  return {
    id: '',
    name: '',
    imagemUrl: '',
    music: []
  }
}
