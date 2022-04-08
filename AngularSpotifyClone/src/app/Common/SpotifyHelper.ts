import { IArtistas } from './../interfaces/IArtistas';
import { IPlaylist } from './../interfaces/IPlaylist';
import { IUsuario } from './../interfaces/IUsuario';


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


