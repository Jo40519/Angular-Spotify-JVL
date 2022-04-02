import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-botaoMenu',
  templateUrl: './botaoMenu.component.html',
  styleUrls: ['./botaoMenu.component.scss']
})
export class BotaoMenuComponent implements OnInit {

  @Input()

  descricao = ''

  constructor() { }

  ngOnInit() {
  }

}
