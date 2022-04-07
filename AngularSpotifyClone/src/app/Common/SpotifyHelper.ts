import { IPlaylist } from './../interfaces/IPlaylist';
import { IUsuario } from './../interfaces/IUsuario';


export function SpotifyUserParaUsuario(user: SpotifyApi.CurrentUsersProfileResponse):IUsuario {
  return {
    id: user.id,
    nome: user.display_name,
    imagemUrl: user.images.pop().url
  }

}

export function SpotifyPlaylistParaPlaylist(playlist: SpotifyApi.PlaylistObjectSimplified): IPlaylist {
  console.log(playlist)
  return {
    id: playlist.id,
    name: playlist.name,
    // imagemUrl: playlist.images.pop().url
  };
}


