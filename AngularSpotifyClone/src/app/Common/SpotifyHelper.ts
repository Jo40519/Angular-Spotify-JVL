import { IMusica } from './../interfaces/IMusica';
import { IArtistas } from './../interfaces/IArtistas';
import { IPlaylist } from './../interfaces/IPlaylist';
import { IUsuario } from './../interfaces/IUsuario';
import { addMilliseconds, format } from 'date-fns';


export function SpotifyUserParaUsuario(user: SpotifyApi.CurrentUsersProfileResponse):IUsuario {
  return {
    id: user.id,
    nome: user.display_name,
    imagemUrl: user.images.pop().url
  }

}

export function SpotifyPlaylistParaPlaylist(playlist: SpotifyApi.PlaylistObjectSimplified):IPlaylist {
  return {
    id: playlist.id,
    name: playlist.name,
    // imagemUrl: playlist.images.pop().url
  };
}


export function SpotifyArtistaParaArtista(spotifyArtista: SpotifyApi.ArtistObjectFull):IArtistas {
  return {
    id: spotifyArtista.id,
    name: spotifyArtista.name,
    imageUrl: spotifyArtista.images.sort((a, b) => a.width - b.width).pop().url,
  }
}


export function SpotifyTrackParaMusica(spotifyTrack: SpotifyApi.TrackObjectFull): IMusica {

  const msParaMinutos = (ms: number) =>  {
    const data = addMilliseconds(new Date(0), ms);
    return format(data, 'mm,ss')
  }
  return {
    id: spotifyTrack.id,
    title: spotifyTrack.name,
    album: {
      id: spotifyTrack.id,
      imageUrl: spotifyTrack.album.images.shift().url,
      name: spotifyTrack.album.name
    },
    artists: spotifyTrack.artists.map(artistas => ({
      id: artistas.id,
      name: artistas.name
    })),
    time: msParaMinutos(spotifyTrack.duration_ms)
  }
}


