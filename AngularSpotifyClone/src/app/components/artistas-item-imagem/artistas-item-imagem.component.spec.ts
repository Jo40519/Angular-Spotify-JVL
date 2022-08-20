import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import SpotifyWebApi from 'spotify-web-api-js';
import { ArtistasItemImagemComponent } from './artistas-item-imagem.component';
import { SpotifyService } from '../../core/services/spotify.service';

describe('ArtistaImagemComponent', () => {
  let component: ArtistasItemImagemComponent;
  let fixture:  ComponentFixture<ArtistasItemImagemComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports:[
        FormsModule,
        SpotifyWebApi
      ],
      declarations: [ArtistasItemImagemComponent],
      providers: [SpotifyService]
    }).compileComponents();
  });

  it('Deve iniciar o componente', () => {
    expect(component).toBeTruthy();
    expect(component.imagemSrc).toBeTruthy();
  })
})
