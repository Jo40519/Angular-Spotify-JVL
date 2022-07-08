import { SpotifyService } from '../../core/services/spotify.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-artistas-item-imagem',
  templateUrl: './artistas-item-imagem.component.html',
  styleUrls: ['./artistas-item-imagem.component.scss']
})
export class ArtistasItemImagemComponent implements OnInit {


  @Input()
  imagemSrc = ''

  @Output()
  click = new EventEmitter<void>();

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit(): void {
  }


  onclick() {
    this.click.emit();
  }
}
